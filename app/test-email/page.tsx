'use client'

import { useState } from 'react'

export default function TestEmail() {
  const [result, setResult] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const sendTestEmail = async () => {
    setLoading(true)
    setResult('Sending test email...')

    try {
      const response = await fetch('/api/test-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          phone: '+1 555 000 0000',
          message: 'This is a test message from the Resend email testing page.',
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setResult(
          `✅ Email sent successfully!\n\nRecipient: ${data.recipientEmail}\n\nResult: ${JSON.stringify(data.result, null, 2)}`
        )
      } else {
        setResult(`❌ Error: ${data.error}\n\nDetails: ${data.details}`)
      }
    } catch (error) {
      setResult(`❌ Failed to send email: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Test Resend Email</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <p className="mb-4 text-gray-700">
            This will send a test email to: <strong>borsab19@gmail.com</strong>
          </p>

          <button
            onClick={sendTestEmail}
            disabled={loading}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Test Email'}
          </button>
        </div>

        {result && (
          <div className="bg-gray-800 text-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3">Result:</h2>
            <pre className="whitespace-pre-wrap text-sm">{result}</pre>
          </div>
        )}
      </div>
    </div>
  )
}
