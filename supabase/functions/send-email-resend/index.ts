import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
}

// Secrets configured via: supabase secrets set RESEND_API_KEY=... FROM_EMAIL=...
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") || ""
const DEFAULT_FROM_EMAIL = Deno.env.get("FROM_EMAIL") || "nabor@iacslovakia.sk"

async function sendViaResend(to: string, subject: string, html: string, text: string, from?: string) {
  if (!RESEND_API_KEY) {
    return {
      success: false,
      message: "Missing RESEND_API_KEY secret. Set it with: supabase secrets set RESEND_API_KEY=...",
    }
  }

  const resend = new Resend(RESEND_API_KEY)

  try {
    const result = await resend.emails.send({
      from: from || DEFAULT_FROM_EMAIL,
      to,
      subject,
      html,
      text,
    })

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
    const { to, subject, html, text, from } = await req.json()

    if (!to || !subject || (!html && !text)) {
      return new Response(JSON.stringify({ success: false, message: "Missing required fields (to, subject, html/text)" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      })
    }

    const result = await sendViaResend(to, subject, html || "", text || "", from)

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


