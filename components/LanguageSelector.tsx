'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Globe } from 'lucide-react'

interface LanguageSelectorProps {
  currentLocale: string
  onLanguageChange: (locale: string) => void
}

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
]

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLocale, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (languageCode: string) => {
    onLanguageChange(languageCode)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-secondary-700 hover:text-primary-500 transition-colors bg-white/80 backdrop-blur-sm rounded-lg border border-primary-100 hover:border-primary-200"
      >
        <Globe className="h-4 w-4" />
        <span className="font-medium">{currentLanguage.flag} {currentLanguage.name}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-primary-100 z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full px-4 py-2 text-left hover:bg-primary-50 transition-colors flex items-center space-x-3 ${
                  currentLocale === language.code 
                    ? 'bg-primary-100 text-primary-700 font-medium' 
                    : 'text-secondary-700'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 