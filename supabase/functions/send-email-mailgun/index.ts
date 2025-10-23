import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

// Mailgun configuration - Update these with your actual values
const MAILGUN_API_KEY = 'key-your-mailgun-api-key-here' // Replace with your Mailgun API key
const MAILGUN_DOMAIN = 'mg.iacgroup.com' // Replace with your Mailgun domain
const MAILGUN_FROM_EMAIL = 'noreply@mg.iacgroup.com' // Replace with your verified sender email

// Function to send email via Mailgun API
async function sendEmailViaMailgun(to: string, subject: string, html: string, text: string, from: string) {
  try {
    console.log('📧 Sending email via Mailgun:')
    console.log('From:', from || MAILGUN_FROM_EMAIL)
    console.log('To:', to)
    console.log('Subject:', subject)

    // Create form data for Mailgun API
    const formData = new FormData()
    formData.append('from', from || MAILGUN_FROM_EMAIL)
    formData.append('to', to)
    formData.append('subject', subject)
    formData.append('text', text)
    formData.append('html', html)

    const response = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`,
      },
      body: formData
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Mailgun API error:', error)
      throw new Error(`Mailgun API error: ${error}`)
    }

    const result = await response.json()
    console.log('📧 Mailgun response:', result)

    return {
      success: true,
      messageId: result.id || `mailgun-${Date.now()}`,
      to: to,
      subject: subject,
      from: from || MAILGUN_FROM_EMAIL,
      service: 'Mailgun'
    }
  } catch (error) {
    console.error('Mailgun Error:', error)
    throw new Error(`Mailgun sending failed: ${error.message}`)
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

    console.log('📧 Sending email via Mailgun to:', to)
    console.log('📧 Subject:', subject)
    console.log('📧 From:', from || MAILGUN_FROM_EMAIL)

    const result = await sendEmailViaMailgun(to, subject, html, text, from || MAILGUN_FROM_EMAIL)

    console.log('📧 Mailgun response:', result)

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    })
  } catch (error) {
    console.error('Mailgun error:', error)
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
