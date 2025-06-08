'use client'

import React, { useEffect } from 'react'
import Cal, { getCalApi } from "@calcom/embed-react"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Target,
  Bot,
  Users,
  TrendingUp,
  Award,
  Mail,
  MapPin,
  MessageCircle
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"})
      cal("ui", {
        "styles": {"branding": {"brandColor": "#CF7652"}},
        "hideEventTypeDetails": false,
        "layout": "month_view"
      })
    })()
  }, [])

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-3xl font-bold">
                <span className="text-secondary-900">Click</span>
                <span className="text-primary-500">Vente</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-secondary-700 hover:text-primary-500 transition-colors font-medium">About</a>
              <a href="#services" className="text-secondary-700 hover:text-primary-500 transition-colors font-medium">Services</a>
              <a href="#results" className="text-secondary-700 hover:text-primary-500 transition-colors font-medium">Results</a>
              <a href="#contact" className="text-secondary-700 hover:text-primary-500 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 hero-gradient opacity-95"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/15 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-100">
                Web Solutions & AI Automation
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              We build powerful websites and intelligent automation systems that work together. 
              From stunning web experiences to smart AI workflows that eliminate manual tasks and accelerate growth.
            </p>
            <div className="flex justify-center px-4">
              <button 
                onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-600 transition-all transform hover:scale-105 shadow-xl"
              >
                Book a Free Consultation
                <ArrowRight className="inline-block ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6 md:mb-8">
              Who We Are
            </h2>
            <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed px-4">
              We're a specialized Web Development & AI Automation Agency that creates integrated digital solutions for modern businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 px-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-secondary-900">Our Mission</h3>
              <p className="text-base sm:text-lg text-secondary-700 leading-relaxed">
                We combine exceptional web development with intelligent automation to create seamless digital experiences. 
                Our mission is to build websites that not only look amazing but also work automatically behind the scenes.
              </p>
              <p className="text-base sm:text-lg text-secondary-700 leading-relaxed">
                From custom web applications to AI-powered workflows, we help businesses operate more efficiently 
                while delivering outstanding user experiences that drive real results.
              </p>
            </div>
            
            <div className="relative px-4">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-800 rounded-2xl p-6 sm:p-8 lg:p-10 text-white">
                <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Why Web + AI Automation?</h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center">
                    <Globe className="h-5 w-5 sm:h-6 sm:w-6 mr-3 sm:mr-4 flex-shrink-0" />
                    <span className="text-base sm:text-lg">Beautiful websites that convert visitors</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-5 w-5 sm:h-6 sm:w-6 mr-3 sm:mr-4 flex-shrink-0" />
                    <span className="text-base sm:text-lg">Smart automation that saves 20+ hours/week</span>
                  </li>
                  <li className="flex items-center">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 mr-3 sm:mr-4 flex-shrink-0" />
                    <span className="text-base sm:text-lg">Integrated systems that work together</span>
                  </li>
                  <li className="flex items-center">
                    <Bot className="h-5 w-5 sm:h-6 sm:w-6 mr-3 sm:mr-4 flex-shrink-0" />
                    <span className="text-base sm:text-lg">AI-powered customer interactions 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6 md:mb-8">
              Web Development & AI Automation Services
            </h2>
            <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed px-4">
              Complete digital solutions combining stunning web experiences with intelligent automation systems
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Custom Web Development */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 card-hover border border-primary-100">
              <div className="bg-primary-100 rounded-lg p-3 sm:p-4 w-fit mb-6 sm:mb-8">
                <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-4 sm:mb-6">Custom Web Development</h3>
              <p className="text-secondary-600 mb-6 sm:mb-8 leading-relaxed">
                Full-stack web applications and websites built with modern technologies. 
                From e-commerce platforms to complex web apps, we create digital experiences that engage and convert.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">React, Next.js & Node.js development</span>
                </li>
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">E-commerce & web applications</span>
                </li>
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Database design & API development</span>
                </li>
              </ul>
            </div>

            {/* AI Workflow Automation */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 card-hover border border-primary-100">
              <div className="bg-accent-100 rounded-lg p-3 sm:p-4 w-fit mb-6 sm:mb-8">
                <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-accent-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-4 sm:mb-6">AI Workflow Automation</h3>
              <p className="text-secondary-600 mb-6 sm:mb-8 leading-relaxed">
                Intelligent automation systems that handle repetitive tasks, process data, and make decisions. 
                From email automation to complex business logic, we build AI that works for you.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Process automation & optimization</span>
                </li>
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">AI-powered decision making</span>
                </li>
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Custom automation scripts</span>
                </li>
              </ul>
            </div>

            {/* Responsive Web Design */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 card-hover border border-primary-100">
              <div className="bg-secondary-100 rounded-lg p-3 sm:p-4 w-fit mb-6 sm:mb-8">
                <Target className="h-8 w-8 sm:h-10 sm:w-10 text-secondary-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-4 sm:mb-6">Responsive Web Design</h3>
              <p className="text-secondary-600 mb-6 sm:mb-8 leading-relaxed">
                Mobile-first designs that look perfect on every device. We create user interfaces 
                that are both beautiful and functional, optimized for performance and conversions.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Mobile-first responsive design</span>
                </li>
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">UI/UX optimization</span>
                </li>
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Performance & SEO optimization</span>
                </li>
              </ul>
            </div>

            {/* AI Chatbot Development */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 card-hover border border-primary-100">
              <div className="bg-primary-100 rounded-lg p-3 sm:p-4 w-fit mb-6 sm:mb-8">
                <Bot className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-4 sm:mb-6">AI Chatbot Development</h3>
              <p className="text-secondary-600 mb-6 sm:mb-8 leading-relaxed">
                Intelligent conversational AI that handles customer inquiries, qualifies leads, 
                and provides 24/7 support. Natural language processing that understands context.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Natural language processing</span>
                </li>
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Lead qualification & routing</span>
                </li>
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Multi-platform integration</span>
                </li>
              </ul>
            </div>

            {/* E-commerce Solutions */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 card-hover border border-primary-100">
              <div className="bg-accent-100 rounded-lg p-3 sm:p-4 w-fit mb-6 sm:mb-8">
                <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-accent-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-4 sm:mb-6">E-commerce Solutions</h3>
              <p className="text-secondary-600 mb-6 sm:mb-8 leading-relaxed">
                Complete online stores with payment processing, inventory management, and customer analytics. 
                Built for scalability and optimized for conversions.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Shopify & custom e-commerce</span>
                </li>
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Payment & inventory systems</span>
                </li>
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Analytics & conversion optimization</span>
                </li>
              </ul>
            </div>

            {/* AI Data Processing */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 card-hover border border-primary-100">
              <div className="bg-secondary-100 rounded-lg p-3 sm:p-4 w-fit mb-6 sm:mb-8">
                <Target className="h-8 w-8 sm:h-10 sm:w-10 text-secondary-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-4 sm:mb-6">AI Data Processing</h3>
              <p className="text-secondary-600 mb-6 sm:mb-8 leading-relaxed">
                Intelligent data analysis, pattern recognition, and automated reporting systems. 
                Transform raw data into actionable insights with AI-powered analytics.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Data analysis & pattern recognition</span>
                </li>
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Automated reporting systems</span>
                </li>
                <li className="flex items-center text-secondary-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">API integrations & data sync</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6 md:mb-8">
              Why Choose <span className="text-secondary-900">Click</span><span className="text-primary-500">Vente</span>?
            </h2>
            <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed px-4">
              The perfect combination of web development mastery and AI automation expertise
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {/* Web Development Expertise */}
            <div className="text-center px-4">
              <div className="bg-primary-100 rounded-full p-4 sm:p-6 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Globe className="h-10 w-10 sm:h-12 sm:w-12 text-primary-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-3 sm:mb-4">Web Development Experts</h3>
              <p className="text-secondary-600 leading-relaxed text-sm sm:text-base">
                Modern, scalable web solutions built with cutting-edge technologies and best practices.
              </p>
            </div>

            {/* AI Automation Specialists */}
            <div className="text-center px-4">
              <div className="bg-accent-100 rounded-full p-4 sm:p-6 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Bot className="h-10 w-10 sm:h-12 sm:w-12 text-accent-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-3 sm:mb-4">AI Automation Specialists</h3>
              <p className="text-secondary-600 leading-relaxed text-sm sm:text-base">
                Intelligent systems that eliminate manual work and accelerate business growth.
              </p>
            </div>

            {/* Rapid Implementation */}
            <div className="text-center px-4">
              <div className="bg-secondary-100 rounded-full p-4 sm:p-6 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-secondary-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-3 sm:mb-4">Rapid Implementation</h3>
              <p className="text-secondary-600 leading-relaxed text-sm sm:text-base">
                Quick deployment of both websites and automation systems with minimal downtime.
              </p>
            </div>

            {/* Integrated Solutions */}
            <div className="text-center px-4">
              <div className="bg-primary-100 rounded-full p-4 sm:p-6 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Target className="h-10 w-10 sm:h-12 sm:w-12 text-primary-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-3 sm:mb-4">Integrated Solutions</h3>
              <p className="text-secondary-600 leading-relaxed text-sm sm:text-base">
                Seamless connection between your web presence and automation workflows.
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-r from-primary-500 to-secondary-800 rounded-2xl p-8 sm:p-12 md:p-16 text-center text-white mx-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Transform Your Business?</h3>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-90 leading-relaxed">
              Join hundreds of businesses already saving time and increasing revenue with our automation solutions.
            </p>
            <button 
              onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-50 transition-colors transform hover:scale-105"
            >
              Let's Automate Your Workflow
              <ArrowRight className="inline-block ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6 md:mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed px-4">
              Get answers to common questions about our web development and AI automation services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-primary-100">
              <h3 className="text-lg sm:text-xl font-bold text-secondary-900 mb-3 sm:mb-4">How long does a typical project take?</h3>
              <p className="text-secondary-600 leading-relaxed text-sm sm:text-base">
                Web development projects typically take 2-6 weeks, while AI automation implementations range from 1-4 weeks. 
                Complex integrated solutions may take 6-12 weeks. We provide detailed timelines during our consultation.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-primary-100">
              <h3 className="text-lg sm:text-xl font-bold text-secondary-900 mb-3 sm:mb-4">What's included in ongoing maintenance?</h3>
              <p className="text-secondary-600 leading-relaxed text-sm sm:text-base">
                Our maintenance includes security updates, performance monitoring, bug fixes, content updates, 
                and 24/7 technical support. We also provide monthly reports and optimization recommendations.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-primary-100">
              <h3 className="text-lg sm:text-xl font-bold text-secondary-900 mb-3 sm:mb-4">Do you work with international clients?</h3>
              <p className="text-secondary-600 leading-relaxed text-sm sm:text-base">
                Yes! We work with clients worldwide. Our team operates across multiple time zones to ensure 
                effective communication and project delivery regardless of your location.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-primary-100">
              <h3 className="text-lg sm:text-xl font-bold text-secondary-900 mb-3 sm:mb-4">What if I'm not satisfied with the results?</h3>
              <p className="text-secondary-600 leading-relaxed text-sm sm:text-base">
                We offer unlimited revisions during the development phase and a 30-day satisfaction guarantee. 
                If you're not completely satisfied, we'll work until you are or provide a full refund.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-primary-100">
              <h3 className="text-lg sm:text-xl font-bold text-secondary-900 mb-3 sm:mb-4">Can you integrate with our existing systems?</h3>
              <p className="text-secondary-600 leading-relaxed text-sm sm:text-base">
                Absolutely! We specialize in seamless integrations with CRMs, ERPs, payment systems, and other business tools. 
                We'll assess your current setup and create custom solutions that work with your existing infrastructure.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-primary-100">
              <h3 className="text-lg sm:text-xl font-bold text-secondary-900 mb-3 sm:mb-4">Do you provide training for our team?</h3>
              <p className="text-secondary-600 leading-relaxed text-sm sm:text-base">
                Yes! We provide comprehensive training sessions, documentation, and video tutorials to ensure 
                your team can effectively use and maintain the systems we build for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Booking Section */}
      <section id="calendar" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6 md:mb-8">
              Book Your Free Consultation
            </h2>
            <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed px-4">
              Ready to eliminate manual tasks and scale your business with smart automation? 
              Select a time that works for you and let's discuss your project.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {/* Calendar Section - First */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-6 sm:mb-8 text-center">Select Your Preferred Time</h3>
              
              {/* Cal.com Calendar Embed */}
              <Cal 
                namespace="30min"
                calLink="click-vente-x5djkq/30min"
                style={{width:"100%",height:"100%",overflow:"scroll"}}
                config={{"layout":"month_view"}}
              />
              
              <p className="text-secondary-500 mt-4 sm:mt-6 text-center leading-relaxed text-sm sm:text-base">
                No spam. We respect your privacy and will only contact you about your project.
              </p>
            </div>

            {/* Contact Information - Second */}
            <div className="grid md:grid-cols-1 gap-12 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 rounded-lg p-3 sm:p-4 mr-4 sm:mr-6">
                    <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900 text-base sm:text-lg">Email Us</div>
                    <div className="text-secondary-600 text-base sm:text-lg">contact@clickvente.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next - Third */}
            <div className="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-xl max-w-5xl mx-auto border border-primary-100/50">
              <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                <h4 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-3 sm:mb-4">What Happens Next?</h4>
                <p className="text-lg sm:text-xl text-secondary-600 leading-relaxed">Your journey to automation success in 3 simple steps</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                {/* Step 1 */}
                <div className="text-center group">
                  <div className="relative mb-6 sm:mb-8">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      1
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-accent-400 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-primary-100/50 group-hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-center mb-4 sm:mb-6">
                      <div className="bg-primary-100 rounded-lg p-3 sm:p-4">
                        <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
                      </div>
                    </div>
                    <h5 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-3 sm:mb-4">Free Consultation</h5>
                    <p className="text-secondary-600 leading-relaxed text-sm sm:text-base">
                      30-minute discovery call to understand your business needs and automation opportunities
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="text-center group">
                  <div className="relative mb-6 sm:mb-8">
                    <div className="bg-gradient-to-br from-secondary-600 to-secondary-700 text-white rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      2
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-accent-400 rounded-full animate-ping opacity-75 animation-delay-500"></div>
                  </div>
                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-primary-100/50 group-hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-center mb-4 sm:mb-6">
                      <div className="bg-secondary-100 rounded-lg p-3 sm:p-4">
                        <Target className="h-6 w-6 sm:h-8 sm:w-8 text-secondary-600" />
                      </div>
                    </div>
                    <h5 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-3 sm:mb-4">Custom Strategy</h5>
                    <p className="text-secondary-600 leading-relaxed text-sm sm:text-base">
                      Tailored automation strategy and web development proposal designed for your specific goals
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="text-center group">
                  <div className="relative mb-6 sm:mb-8">
                    <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      3
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-primary-400 rounded-full animate-ping opacity-75 animation-delay-1000"></div>
                  </div>
                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-primary-100/50 group-hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-center mb-4 sm:mb-6">
                      <div className="bg-accent-100 rounded-lg p-3 sm:p-4">
                        <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-accent-600" />
                      </div>
                    </div>
                    <h5 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-3 sm:mb-4">Launch & Grow</h5>
                    <p className="text-secondary-600 leading-relaxed text-sm sm:text-base">
                      Implementation, testing, and launch of your automated systems with ongoing support
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-primary-200/50">
                <p className="text-secondary-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                  <span className="font-semibold text-primary-600">Ready to get started?</span> Book your free consultation above and let's transform your business together.
                </p>
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-secondary-500 text-sm sm:text-base">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500" />
                  <span>No commitment required</span>
                  <span>•</span>
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500" />
                  <span>100% confidential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            <div className="col-span-2">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="text-2xl sm:text-3xl font-bold">
                  <span className="text-white">ClickVente</span>
                </div>
              </div>
              <p className="text-secondary-400 mb-6 sm:mb-8 max-w-md text-base sm:text-lg leading-relaxed">
                Transforming businesses with cutting-edge web development and AI automation solutions. 
                Your success is our mission.
              </p>
              <div className="flex space-x-4 sm:space-x-6">
                <button className="bg-secondary-800 hover:bg-secondary-700 p-2 sm:p-3 rounded-lg transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="h-5 w-5 sm:h-6 sm:w-6 bg-secondary-400"></div>
                </button>
                <button className="bg-secondary-800 hover:bg-secondary-700 p-2 sm:p-3 rounded-lg transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="h-5 w-5 sm:h-6 sm:w-6 bg-secondary-400"></div>
                </button>
               
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-lg sm:text-xl">About Us</h4>
              <div className="space-y-3 sm:space-y-4 text-secondary-400 text-base sm:text-lg">
                <p className="leading-relaxed">
                  ClickVente LTD specializes in web development and AI automation solutions that transform businesses.
                </p>
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-xs sm:text-sm">
                    <span className="font-semibold text-secondary-300">Company:</span> ClickVente LTD
                  </p>
                  <p className="text-xs sm:text-sm">
                    <span className="font-semibold text-secondary-300">Registration:</span> 16156224
                  </p>
                  
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-lg sm:text-xl">Links</h4>
              <ul className="space-y-2 sm:space-y-3 text-secondary-400 text-base sm:text-lg">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#calendar" className="hover:text-white transition-colors">Free Consultation</a></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-800 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center text-secondary-400 text-base sm:text-lg">
            <p>&copy; 2025 ClickVente LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 