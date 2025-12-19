import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders })
  }

  try {
    // Get Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || ""
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || ""
    
    if (!supabaseUrl || !supabaseServiceKey) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: "Missing Supabase configuration" 
      }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      })
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Get current date
    const now = new Date()
    const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000)
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

    // Find pending requests older than 3 days
    // Check requests where last_reminder_sent is null OR older than 3 days ago
    const { data: requests3Days, error: error3Days } = await supabase
      .from('recruiting_requests')
      .select('*')
      .eq('status', 'Pending')
      .lt('created_at', threeDaysAgo.toISOString())
      .or(`last_reminder_sent.is.null,last_reminder_sent.lt.${threeDaysAgo.toISOString()}`)

    if (error3Days) {
      console.error('Error fetching 3-day old requests:', error3Days)
    }

    // Find pending requests older than 1 week
    // Check requests where last_reminder_sent is null OR older than 1 week ago
    const { data: requests1Week, error: error1Week } = await supabase
      .from('recruiting_requests')
      .select('*')
      .eq('status', 'Pending')
      .lt('created_at', oneWeekAgo.toISOString())
      .or(`last_reminder_sent.is.null,last_reminder_sent.lt.${oneWeekAgo.toISOString()}`)

    if (error1Week) {
      console.error('Error fetching 1-week old requests:', error1Week)
    }

    // Get all GMs and Recruiters with emails
    const { data: gms, error: gmError } = await supabase
      .from('users')
      .select('email, role')
      .in('role', ['gm', 'recruiter'])
      .not('email', 'is', null)

    if (gmError) {
      console.error('Error fetching GMs:', gmError)
      return new Response(JSON.stringify({ 
        success: false, 
        error: "Error fetching GMs" 
      }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      })
    }

    if (!gms || gms.length === 0) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: "No GMs found with emails",
        sent: 0
      }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      })
    }

    let emailsSent = 0
    const baseUrl = Deno.env.get("SITE_URL") || "https://recruiting.iacslovakia.sk"

    // Filter out requests that are older than 1 week from 3-day list
    // (we'll process them separately with urgent reminder)
    const requests3DaysOnly = requests3Days?.filter(req => {
      const createdDate = new Date(req.created_at)
      return createdDate >= oneWeekAgo
    }) || []

    // Process 3-day old requests (but not older than 1 week)
    if (requests3DaysOnly.length > 0) {
      for (const request of requests3DaysOnly) {
        const daysOld = Math.floor((now.getTime() - new Date(request.created_at).getTime()) / (24 * 60 * 60 * 1000))
        
        // Check if we already sent a reminder for this request in the last 3 days
        if (request.last_reminder_sent) {
          const lastReminderDate = new Date(request.last_reminder_sent)
          const daysSinceLastReminder = Math.floor((now.getTime() - lastReminderDate.getTime()) / (24 * 60 * 60 * 1000))
          if (daysSinceLastReminder < 3) {
            continue // Skip if we sent a reminder less than 3 days ago
          }
        }

        // Send reminder emails to all GMs
        for (const gm of gms) {
          if (gm.email) {
            try {
              const subject = `Pripomienka: Žiadosť o nábor čaká na schválenie - ${request.position} (${daysOld} dní)`
              const html = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #f59e0b;">⚠️ Pripomienka: Žiadosť čaká na schválenie</h2>
                  <p>Dobrý deň,</p>
                  <p>Žiadosť o nábor čaká na vaše schválenie už <strong>${daysOld} dní</strong>:</p>
                  
                  <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
                    <h3 style="margin-top: 0; color: #333;">Detaily pozície:</h3>
                    <p><strong>Pozícia:</strong> ${request.position}</p>
                    <p><strong>Oddelenie:</strong> ${request.department}</p>
                    <p><strong>Typ:</strong> ${request.position_type}</p>
                    <p><strong>Kategória:</strong> ${request.position_category}</p>
                    <p><strong>Počet miest:</strong> ${request.headcount}</p>
                    <p><strong>Dátum vytvorenia:</strong> ${new Date(request.created_at).toLocaleDateString('sk-SK')}</p>
                  </div>
                  
                  <p>Prosím, prihláste sa do systému a schváľte alebo zamietnite túto žiadosť.</p>
                  
                  <div style="text-align: center; margin: 30px 0;">
                    <a href="${baseUrl}/#gm-approval" style="display: inline-block; background-color: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Schváliť žiadosť</a>
                  </div>
                  
                  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                    <p style="color: #666; font-size: 14px;">
                      Tento email bol odoslaný automaticky zo systému na riadenie náboru.<br>
                      <a href="${baseUrl}" style="color: #f59e0b;">${baseUrl}</a>
                    </p>
                  </div>
                </div>
              `

              const text = `
Pripomienka: Žiadosť o nábor čaká na schválenie

Dobrý deň,

Žiadosť o nábor čaká na vaše schválenie už ${daysOld} dní:

Detaily pozície:
- Pozícia: ${request.position}
- Oddelenie: ${request.department}
- Typ: ${request.position_type}
- Kategória: ${request.position_category}
- Počet miest: ${request.headcount}
- Dátum vytvorenia: ${new Date(request.created_at).toLocaleDateString('sk-SK')}

Prosím, prihláste sa do systému a schváľte alebo zamietnite túto žiadosť.

Otvoriť systém: ${baseUrl}/#gm-approval

Tento email bol odoslaný automaticky zo systému na riadenie náboru.
              `

              // Call send-email-resend function
              const emailResponse = await fetch(`${supabaseUrl}/functions/v1/send-email-resend`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${supabaseServiceKey}`
                },
                body: JSON.stringify({
                  to: gm.email,
                  subject: subject,
                  html: html,
                  text: text
                })
              })

              if (emailResponse.ok) {
                emailsSent++
                console.log(`✅ Reminder email sent to ${gm.email} for request ${request.id}`)
              } else {
                console.error(`❌ Failed to send email to ${gm.email}:`, await emailResponse.text())
              }
            } catch (error) {
              console.error(`❌ Error sending email to ${gm.email}:`, error)
            }
          }
        }

        // Update last_reminder_sent timestamp
        await supabase
          .from('recruiting_requests')
          .update({ last_reminder_sent: now.toISOString() })
          .eq('id', request.id)
      }
    }

    // Process 1-week old requests (more urgent)
    if (requests1Week && requests1Week.length > 0) {
      for (const request of requests1Week) {
        const daysOld = Math.floor((now.getTime() - new Date(request.created_at).getTime()) / (24 * 60 * 60 * 1000))
        
        // Check if we already sent an urgent reminder for this request in the last 7 days
        if (request.last_reminder_sent) {
          const lastReminderDate = new Date(request.last_reminder_sent)
          const daysSinceLastReminder = Math.floor((now.getTime() - lastReminderDate.getTime()) / (24 * 60 * 60 * 1000))
          if (daysSinceLastReminder < 7) {
            continue // Skip if we sent a reminder less than 7 days ago
          }
        }
        
        // Only send urgent reminder if request is actually older than 1 week
        const daysOld = Math.floor((now.getTime() - new Date(request.created_at).getTime()) / (24 * 60 * 60 * 1000))
        if (daysOld < 7) {
          continue // Skip if not actually older than 1 week
        }

        // Send urgent reminder emails to all GMs
        for (const gm of gms) {
          if (gm.email) {
            try {
              const daysOld = Math.floor((now.getTime() - new Date(request.created_at).getTime()) / (24 * 60 * 60 * 1000))
              const subject = `🚨 URGENTNÁ PRIPOMIENKA: Žiadosť o nábor čaká na schválenie už ${daysOld} dní - ${request.position}`
              const html = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #dc2626;">🚨 URGENTNÁ PRIPOMIENKA</h2>
                  <p>Dobrý deň,</p>
                  <p><strong>Žiadosť o nábor čaká na vaše schválenie už <span style="color: #dc2626; font-size: 18px;">${daysOld} dní</span>!</strong></p>
                  
                  <div style="background: #fee2e2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
                    <h3 style="margin-top: 0; color: #333;">Detaily pozície:</h3>
                    <p><strong>Pozícia:</strong> ${request.position}</p>
                    <p><strong>Oddelenie:</strong> ${request.department}</p>
                    <p><strong>Typ:</strong> ${request.position_type}</p>
                    <p><strong>Kategória:</strong> ${request.position_category}</p>
                    <p><strong>Počet miest:</strong> ${request.headcount}</p>
                    <p><strong>Dátum vytvorenia:</strong> ${new Date(request.created_at).toLocaleDateString('sk-SK')}</p>
                  </div>
                  
                  <p style="font-size: 16px; font-weight: bold; color: #dc2626;">Prosím, okamžite schváľte alebo zamietnite túto žiadosť.</p>
                  
                  <div style="text-align: center; margin: 30px 0;">
                    <a href="${baseUrl}/#gm-approval" style="display: inline-block; background-color: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">SCHVÁLIŤ ŽIADOSŤ</a>
                  </div>
                  
                  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                    <p style="color: #666; font-size: 14px;">
                      Tento email bol odoslaný automaticky zo systému na riadenie náboru.<br>
                      <a href="${baseUrl}" style="color: #dc2626;">${baseUrl}</a>
                    </p>
                  </div>
                </div>
              `

              const text = `
🚨 URGENTNÁ PRIPOMIENKA: Žiadosť o nábor čaká na schválenie

Dobrý deň,

Žiadosť o nábor čaká na vaše schválenie už ${daysOld} dní!

Detaily pozície:
- Pozícia: ${request.position}
- Oddelenie: ${request.department}
- Typ: ${request.position_type}
- Kategória: ${request.position_category}
- Počet miest: ${request.headcount}
- Dátum vytvorenia: ${new Date(request.created_at).toLocaleDateString('sk-SK')}

Prosím, okamžite schváľte alebo zamietnite túto žiadosť.

Otvoriť systém: ${baseUrl}/#gm-approval

Tento email bol odoslaný automaticky zo systému na riadenie náboru.
              `

              // Call send-email-resend function
              const emailResponse = await fetch(`${supabaseUrl}/functions/v1/send-email-resend`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${supabaseServiceKey}`
                },
                body: JSON.stringify({
                  to: gm.email,
                  subject: subject,
                  html: html,
                  text: text
                })
              })

              if (emailResponse.ok) {
                emailsSent++
                console.log(`✅ Urgent reminder email sent to ${gm.email} for request ${request.id}`)
              } else {
                console.error(`❌ Failed to send email to ${gm.email}:`, await emailResponse.text())
              }
            } catch (error) {
              console.error(`❌ Error sending email to ${gm.email}:`, error)
            }
          }
        }

        // Update last_reminder_sent timestamp
        await supabase
          .from('recruiting_requests')
          .update({ last_reminder_sent: now.toISOString() })
          .eq('id', request.id)
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Reminder check completed",
      sent: emailsSent,
      requests3Days: requests3Days?.length || 0,
      requests1Week: requests1Week?.length || 0
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    })
  } catch (error: any) {
    console.error('Function error:', error)
    return new Response(JSON.stringify({ 
      success: false, 
      error: error?.message || String(error) 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    })
  }
})

