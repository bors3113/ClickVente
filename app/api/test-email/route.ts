import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    console.log('Testing email with Resend...')
    console.log('Sending to:', process.env.NOTIFICATION_EMAIL)

    // Send email notification using Resend
    const result = await resend.emails.send({
      from: 'ClickVente Contact Form <onboarding@resend.dev>',
      to: [process.env.NOTIFICATION_EMAIL || 'borsab19@gmail.com'],
      subject: `TEST - New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #CF7652;">TEST - New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">Test email sent at: ${new Date().toLocaleString()}</p>
        </div>
      `,
    })

    console.log('Email sent successfully:', result)

    return NextResponse.json(
      {
        message: 'Test email sent successfully',
        result,
        recipientEmail: process.env.NOTIFICATION_EMAIL
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
