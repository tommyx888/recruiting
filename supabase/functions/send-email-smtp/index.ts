import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

// Gmail SMTP configuration
const SMTP_HOST = 'smtp.gmail.com'
const SMTP_PORT = 587
const SMTP_USER = 'noreply@iacgroup.com' // Change to your Gmail address
const SMTP_PASS = 'your-app-password-here' // Will be set via environment variable

// Function to send email via Gmail SMTP using fetch API
async function sendEmailViaSMTP(to: string, subject: string, html: string, text: string, from: string) {
  try {
    console.log('📧 Sending email via Gmail SMTP:')
    console.log('From:', from)
    console.log('To:', to)
    console.log('Subject:', subject)

    // Use Gmail API instead of SMTP for better reliability
    // First, we need to get an access token
    const accessToken = await getGmailAccessToken()
    
    // Create email message in Gmail API format
    const message = [
      `From: ${from}`,
      `To: ${to}`,
      `Subject: ${subject}`,
      'MIME-Version: 1.0',
      'Content-Type: multipart/alternative; boundary="boundary123"',
      '',
      '--boundary123',
      'Content-Type: text/plain; charset=UTF-8',
      '',
      text,
      '',
      '--boundary123',
      'Content-Type: text/html; charset=UTF-8',
      '',
      html,
      '',
      '--boundary123--'
    ].join('\r\n')

    // Encode message in base64url format for Gmail API
    const encodedMessage = btoa(message)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '')

    // Send via Gmail API
    const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        raw: encodedMessage
      })
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Gmail API error:', error)
      throw new Error(`Gmail API error: ${error}`)
    }

    const result = await response.json()
    console.log('📧 Gmail API response:', result)

    return {
      success: true,
      messageId: result.id || `gmail-${Date.now()}`,
      to: to,
      subject: subject,
      from: from,
      service: 'Gmail API'
    }
  } catch (error) {
    console.error('Gmail API Error:', error)
    throw new Error(`Gmail API sending failed: ${error.message}`)
  }
}

// Function to get Gmail access token (simplified version)
async function getGmailAccessToken() {
  // For now, return a placeholder token
  // In production, you would implement proper OAuth2 flow
  console.log('⚠️ Using placeholder access token - implement OAuth2 for production')
  return 'placeholder-access-token'
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
    const { to, subject, html, text, from } = await req.json()

    console.log('📧 Sending email via Gmail SMTP to:', to)
    console.log('📧 Subject:', subject)
    console.log('📧 From:', from || SMTP_USER)

    const result = await sendEmailViaSMTP(to, subject, html, text, from || SMTP_USER)

    console.log('📧 Gmail SMTP response:', result)

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    })
  } catch (error) {
    console.error('Gmail SMTP error:', error)
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    })
  }
})
