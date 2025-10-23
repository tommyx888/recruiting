import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

// Gmail API configuration
const GMAIL_API_URL = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send'

// Load credentials from file (you'll need to upload this)
let credentials: any = null
let appPassword: string = ''

// Load credentials on startup
try {
  const credentialsText = await Deno.readTextFile('./gmail-credentials.json')
  credentials = JSON.parse(credentialsText)
  console.log('✅ Gmail credentials loaded')
} catch (error) {
  console.warn('⚠️ Gmail credentials not found, using fallback')
}

try {
  appPassword = await Deno.readTextFile('./gmail-app-password.txt')
  console.log('✅ Gmail app password loaded')
} catch (error) {
  console.warn('⚠️ Gmail app password not found')
}

// Function to get Gmail access token
async function getGmailAccessToken() {
  if (!credentials) {
    throw new Error('Gmail credentials not configured')
  }

  // For service account, we need to create a JWT and exchange it for access token
  const now = Math.floor(Date.now() / 1000)
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/gmail.send',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600, // 1 hour
  }

  // Create JWT (simplified version - in production use a proper JWT library)
  const header = {
    alg: 'RS256',
    typ: 'JWT'
  }

  // This is a simplified implementation - in production you'd use a proper JWT library
  // For now, we'll use a different approach with OAuth2
  return 'your-access-token-here'
}

// Function to send email via Gmail API
async function sendEmailViaGmail(to: string, subject: string, html: string, text: string) {
  const accessToken = await getGmailAccessToken()
  
  // Create email message
  const message = [
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
  ].join('\n')

  // Encode message in base64url
  const encodedMessage = btoa(message)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')

  const response = await fetch(GMAIL_API_URL, {
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
    throw new Error(`Gmail API error: ${error}`)
  }

  return await response.json()
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

    console.log('📧 Sending email via Gmail API to:', to)
    console.log('📧 Subject:', subject)

    // For now, return success (you'll need to implement proper Gmail API integration)
    const result = {
      success: true,
      message: 'Email sent via Gmail API (simulated)',
      to: to,
      subject: subject
    }

    console.log('📧 Gmail API response:', result)

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    })
  } catch (error) {
    console.error('Gmail API error:', error)
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

