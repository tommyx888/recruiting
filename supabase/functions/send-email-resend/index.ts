import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0"
import { Buffer } from "node:buffer"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
}

// Secrets configured via: supabase secrets set RESEND_API_KEY=... FROM_EMAIL=...
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") || ""
const DEFAULT_FROM_EMAIL = Deno.env.get("FROM_EMAIL") || "nabor@iacslovakia.sk"

interface Attachment {
  filename: string
  content: string // Base64 encoded
  contentType?: string
}

async function sendViaResend(
  to: string, 
  subject: string, 
  html: string, 
  text: string, 
  from?: string,
  attachments?: Attachment[]
) {
  if (!RESEND_API_KEY) {
    return {
      success: false,
      message: "Missing RESEND_API_KEY secret. Set it with: supabase secrets set RESEND_API_KEY=...",
    }
  }

  const resend = new Resend(RESEND_API_KEY)

  try {
    // Prepare email options
    const emailOptions: any = {
      from: from || DEFAULT_FROM_EMAIL,
      to,
      subject,
      html,
      text,
    }

    // Add attachments if provided (Buffer format for Resend)
    if (attachments && attachments.length > 0) {
      emailOptions.attachments = attachments
        .map(att => {
          try {
            const content = Buffer.from(att.content, 'base64')
            return { filename: att.filename, content, contentType: att.contentType || 'application/octet-stream' }
          } catch (e) {
            console.warn('Attachment base64 decode failed:', att.filename, e)
            return null
          }
        })
        .filter(Boolean)
    }

    const result = await resend.emails.send(emailOptions)

    if ((result as any)?.error) {
      return { success: false, error: (result as any).error }
    }

    return { success: true, data: result }
  } catch (error: any) {
    return { success: false, error: error?.message || String(error) }
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders })
  }

  try {
    const { to, subject, html, text, from, attachments } = await req.json()

    if (!to || !subject || (!html && !text)) {
      return new Response(JSON.stringify({ success: false, message: "Missing required fields (to, subject, html/text)" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      })
    }

    // Validate attachments format if provided
    if (attachments && Array.isArray(attachments)) {
      for (const att of attachments) {
        if (!att.filename || !att.content) {
          return new Response(JSON.stringify({ 
            success: false, 
            message: "Invalid attachment format. Each attachment must have 'filename' and 'content' (base64)" 
          }), {
            status: 400,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          })
        }
      }
    }

    const result = await sendViaResend(
      to, 
      subject, 
      html || "", 
      text || "", 
      from,
      attachments
    )

    const status = result.success ? 200 : 400
    return new Response(JSON.stringify(result), {
      status,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    })
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error?.message || String(error) }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    })
  }
})


