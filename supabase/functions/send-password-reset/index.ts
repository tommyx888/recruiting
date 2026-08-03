import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
import { Resend } from "npm:resend@2.0.0"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
}

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") || ""
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") || "nabor@artifex-systems.sk"
const RESET_PASSWORD_URL =
  Deno.env.get("RESET_PASSWORD_URL") ||
  Deno.env.get("SITE_URL") ||
  "https://recruiting.artifex-systems.sk/reset-password.html"
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || ""
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || ""

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  })
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function buildResetEmail(resetUrl: string) {
  const subject = "Obnovenie hesla – Recruiting"
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #222;">
      <h2 style="color: #2e0de6;">Obnovenie hesla</h2>
      <p>Dobrý deň,</p>
      <p>dostali sme žiadosť o obnovenie hesla do Recruiting systému.</p>
      <p style="margin: 28px 0; text-align: center;">
        <a href="${resetUrl}"
           style="display: inline-block; padding: 14px 28px; background-color: #2e0de6; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold;">
          Nastaviť nové heslo
        </a>
      </p>
      <p style="font-size: 14px; color: #555;">
        Ak tlačidlo nefunguje, skopírujte tento odkaz do prehliadača:
      </p>
      <p style="font-size: 13px; word-break: break-all; color: #333;">${resetUrl}</p>
      <p style="font-size: 13px; color: #777; margin-top: 24px;">
        Odkaz je jednorazový. Ak ste o obnovenie hesla nežiadali, tento e-mail ignorujte.
      </p>
    </div>
  `
  const text = `Obnovenie hesla – Recruiting

Otvorte tento odkaz a nastavte nové heslo:
${resetUrl}

Odkaz je jednorazový. Ak ste o obnovenie hesla nežiadali, tento e-mail ignorujte.`

  return { subject, html, text }
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  if (req.method !== "POST") {
    return jsonResponse({ success: false, message: "Method not allowed" }, 405)
  }

  try {
    const { email } = await req.json()
    const normalizedEmail = String(email || "").trim().toLowerCase()

    // Always return a generic success to avoid email enumeration.
    const genericSuccess = {
      success: true,
      message: "If an account exists for this email, a reset link has been sent.",
    }

    if (!normalizedEmail || !isValidEmail(normalizedEmail)) {
      return jsonResponse({ success: false, message: "Valid email is required" }, 400)
    }

    if (!RESEND_API_KEY || !SUPABASE_URL || !SERVICE_ROLE_KEY) {
      console.error("Missing RESEND_API_KEY / SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY")
      return jsonResponse({ success: false, message: "Server is not configured for password reset" }, 500)
    }

    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
      auth: { autoRefreshToken: false, persistSession: false },
    })

    const { data, error } = await admin.auth.admin.generateLink({
      type: "recovery",
      email: normalizedEmail,
      options: {
        redirectTo: RESET_PASSWORD_URL,
      },
    })

    if (error || !data?.properties?.hashed_token) {
      // User may not exist – do not leak that information.
      console.warn("generateLink failed or missing token:", error?.message || "no hashed_token")
      return jsonResponse(genericSuccess)
    }

    const tokenHash = data.properties.hashed_token
    const separator = RESET_PASSWORD_URL.includes("?") ? "&" : "?"
    const resetUrl = `${RESET_PASSWORD_URL}${separator}token_hash=${encodeURIComponent(tokenHash)}&type=recovery`
    const { subject, html, text } = buildResetEmail(resetUrl)

    const resend = new Resend(RESEND_API_KEY)
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: normalizedEmail,
      subject,
      html,
      text,
    })

    if ((result as { error?: unknown })?.error) {
      console.error("Resend error:", (result as { error?: unknown }).error)
      return jsonResponse({ success: false, message: "Failed to send reset email" }, 500)
    }

    console.log("Password reset email sent via Resend to", normalizedEmail)
    return jsonResponse(genericSuccess)
  } catch (error) {
    console.error("send-password-reset error:", error)
    return jsonResponse({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    }, 500)
  }
})
