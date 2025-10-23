import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

// SendGrid configuration - Update these with your actual values
const SENDGRID_API_KEY = 'SG.your-sendgrid-api-key-here' // Replace with your SendGrid API key
const SENDGRID_FROM_EMAIL = 'noreply@iacgroup.com' // Replace with your verified sender email

// Function to send email via SendGrid API
async function sendEmailViaSendGrid(to: string, subject: string, html: string, text: string, from: string) {
  try {
    console.log('📧 Sending email via SendGrid:')
    console.log('From:', from || SENDGRID_FROM_EMAIL)
    console.log('To:', to)
    console.log('Subject:', subject)

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: to }],
            subject: subject
          }
        ],
        from: {
          email: from || SENDGRID_FROM_EMAIL,
          name: 'Recruiting System'
        },
        content: [
          {
            type: 'text/plain',
            value: text
          },
          {
            type: 'text/html',
            value: html
          }
        ]
      })
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('SendGrid API error:', error)
      throw new Error(`SendGrid API error: ${error}`)
    }

    const result = {
      success: true,
      messageId: `sendgrid-${Date.now()}`,
      to: to,
      subject: subject,
      from: from || SENDGRID_FROM_EMAIL,
      service: 'SendGrid'
    }

    console.log('📧 SendGrid response:', result)
    return result
  } catch (error) {
    console.error('SendGrid Error:', error)
    throw new Error(`SendGrid sending failed: ${error.message}`)
  }
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

    console.log('📧 Sending email via SendGrid to:', to)
    console.log('📧 Subject:', subject)
    console.log('📧 From:', from || SENDGRID_FROM_EMAIL)

    const result = await sendEmailViaSendGrid(to, subject, html, text, from || SENDGRID_FROM_EMAIL)

    console.log('📧 SendGrid response:', result)

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    })
  } catch (error) {
    console.error('SendGrid error:', error)
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
