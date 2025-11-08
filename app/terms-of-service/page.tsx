import Link from 'next/link'

export default function TermsOfService() {
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
            <h1 className="text-4xl font-bold text-secondary-900 mb-8">Terms of Service</h1>
            
            <p className="text-secondary-600 mb-8">
              <strong>Last updated:</strong> January 2025
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-secondary-700 leading-relaxed">
                  By accessing and using the services provided by ClickVente LTD ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service and all applicable laws and regulations.
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
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">2. Services Provided</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  ClickVente LTD provides web development and AI automation services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-secondary-700">
                  <li>Custom web application development</li>
                  <li>Responsive web design and development</li>
                  <li>E-commerce solutions</li>
                  <li>AI workflow automation</li>
                  <li>AI chatbot development</li>
                  <li>Data processing and analytics</li>
                  <li>System integrations</li>
                  <li>Ongoing maintenance and support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">3. Project Terms</h2>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">3.1 Project Scope</h3>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  All projects will be defined by a written agreement or statement of work that outlines deliverables, timelines, and costs.
                </p>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">3.2 Payment Terms</h3>
                <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-4">
                  <li>Payment schedules will be outlined in individual project agreements</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Refunds are subject to our satisfaction guarantee policy</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-900 mb-3">3.3 Client Responsibilities</h3>
                <ul className="list-disc pl-6 space-y-2 text-secondary-700">
                  <li>Provide necessary content, materials, and access</li>
                  <li>Respond to requests for feedback in a timely manner</li>
                  <li>Ensure all provided content is legally compliant</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">4. Intellectual Property</h2>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">4.1 Client Ownership</h3>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  Upon full payment, clients retain ownership of custom-developed code and content created specifically for their project.
                </p>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">4.2 Company Ownership</h3>
                <p className="text-secondary-700 leading-relaxed">
                  We retain ownership of our proprietary tools, frameworks, methodologies, and any pre-existing intellectual property.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">5. Warranties and Disclaimers</h2>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">5.1 Service Warranty</h3>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  We warrant that our services will be performed with professional skill and care. We offer a 30-day satisfaction guarantee on completed projects.
                </p>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">5.2 Disclaimers</h3>
                <p className="text-secondary-700 leading-relaxed">
                  While we strive for excellence, we cannot guarantee specific business outcomes, search engine rankings, or conversion rates.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-secondary-700 leading-relaxed">
                  Our liability for any claims arising from our services shall not exceed the total amount paid by the client for the specific project in question.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">7. Confidentiality</h2>
                <p className="text-secondary-700 leading-relaxed">
                  We maintain strict confidentiality regarding all client information and project details. We will not disclose confidential information without written consent, except as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">8. Termination</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  Either party may terminate a project agreement with written notice. Termination terms will be outlined in individual project agreements.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-secondary-700">
                  <li>Client will pay for work completed up to termination date</li>
                  <li>All deliverables completed will be provided to client</li>
                  <li>Confidentiality obligations survive termination</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">9. Governing Law</h2>
                <p className="text-secondary-700 leading-relaxed">
                  These terms are governed by the laws of England and Wales. Any disputes will be resolved through the courts of England and Wales.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">10. Contact Information</h2>
                <p className="text-secondary-700 leading-relaxed">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-secondary-50 p-6 rounded-lg mt-4">
                  <p className="text-secondary-700">
                    <strong>Email:</strong> legal@clickvente.com<br />
                    <strong>Address:</strong> ClickVente LTD, England and Wales
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">11. Changes to Terms</h2>
                <p className="text-secondary-700 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 