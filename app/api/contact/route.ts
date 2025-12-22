import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Send email notification using Resend
    try {
      const emailResult = await resend.emails.send({
        from: 'ClickVente Contact Form <onboarding@resend.dev>',
        to: [process.env.NOTIFICATION_EMAIL || 'borsab19@gmail.com'],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #CF7652;">New Contact Form Submission</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Message:</strong></p>
              <p style="background-color: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #666; font-size: 12px;">Submitted at: ${new Date().toLocaleString()}</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">Reply directly to this email to contact: ${email}</p>
          </div>
        `,
        replyTo: email, // Allow you to reply directly to the customer
      })

      console.log('Email sent successfully:', emailResult)

      return NextResponse.json(
        {
          message: 'Form submitted successfully! We will get back to you soon.',
          emailSent: true
        },
        { status: 200 }
      )
    } catch (emailError) {
      console.error('Email error:', emailError)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
