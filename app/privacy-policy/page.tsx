import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-primary-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-secondary-900">Click</span>
                <span className="text-primary-500">Vente</span>
              </div>
            </Link>
            <Link 
              href="/"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-secondary-900 mb-8">Privacy Policy</h1>
            
            <p className="text-secondary-600 mb-8">
              <strong>Last updated:</strong> January 2025
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">1. Introduction</h2>
                <p className="text-secondary-700 leading-relaxed">
                  ClickVente LTD ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <div className="bg-primary-50 p-6 rounded-lg mt-4">
                  <p className="text-secondary-700">
                    <strong>Company Details:</strong><br />
                    ClickVente LTD<br />
                    Company Registration: 16156224<br />
                    Registered in England and Wales
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-secondary-700">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company information and job title</li>
                  <li>Project requirements and business needs</li>
                  <li>Communication preferences</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3 mt-6">Technical Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-secondary-700">
                  <li>IP address and browser information</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2 text-secondary-700">
                  <li>To provide and improve our web development and AI automation services</li>
                  <li>To communicate with you about your projects and inquiries</li>
                  <li>To send you relevant updates and marketing communications (with consent)</li>
                  <li>To analyze website usage and improve user experience</li>
                  <li>To comply with legal obligations and protect our rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">4. Information Sharing</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-secondary-700">
                  <li>With trusted service providers who assist in our operations</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">5. Data Security</h2>
                <p className="text-secondary-700 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">6. Your Rights (GDPR)</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  Under the General Data Protection Regulation (GDPR), you have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-secondary-700">
                  <li>Right to access your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">7. Cookies</h2>
                <p className="text-secondary-700 leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">8. Contact Us</h2>
                <p className="text-secondary-700 leading-relaxed">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="bg-secondary-50 p-6 rounded-lg mt-4">
                  <p className="text-secondary-700">
                    <strong>Email:</strong> privacy@clickvente.com<br />
                    <strong>Address:</strong> ClickVente LTD, England and Wales
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">9. Changes to This Policy</h2>
                <p className="text-secondary-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 