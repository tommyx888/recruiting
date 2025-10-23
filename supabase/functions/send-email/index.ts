import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = 're_9xAyynnd_A3Rpcfjyh1jK7NQZymk3ok8n'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { 
      status: 405,
      headers: corsHeaders
    })
  }

  try {
    const { to, subject, html, text } = await req.json()

    console.log('📧 Sending email to:', to)
    console.log('📧 Subject:', subject)

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
            from: 'onboarding@resend.dev', // Resend default domain (no verification needed)
        to: to,
        subject: subject,
        html: html,
        text: text
      })
    })

    const data = await response.json()
    console.log('📧 Resend API response:', data)

    if (!response.ok) {
      console.error('❌ Resend API error:', data)
      return new Response(JSON.stringify({ 
        success: false, 
        error: data,
        message: `Resend API error: ${data.message || 'Unknown error'}`
      }), {
        status: 400,
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      })
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    })
  } catch (error) {
    console.error('Function error:', error)
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    })
  }
})
