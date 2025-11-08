'use client'

import { useState, useEffect } from 'react'

interface TranslationData {
  [key: string]: any
}

const SUPPORTED_LOCALES = ['en', 'fr', 'ar']
const DEFAULT_LOCALE = 'en'

export function useTranslation() {
  const [locale, setLocale] = useState<string>(DEFAULT_LOCALE)
  const [translations, setTranslations] = useState<TranslationData>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Detect locale from localStorage or browser
    const detectLocale = () => {
      if (typeof window !== 'undefined') {
        // First check localStorage
        const savedLocale = localStorage.getItem('locale')
        if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
          return savedLocale
        }
        
        // Then check browser language
        const browserLang = navigator.language.split('-')[0]
        if (SUPPORTED_LOCALES.includes(browserLang)) {
          return browserLang
        }
      }
      return DEFAULT_LOCALE
    }

    const detectedLocale = detectLocale()
    setLocale(detectedLocale)
    loadTranslations(detectedLocale)
  }, [])

  const loadTranslations = async (lang: string) => {
    setLoading(true)
    try {
      const response = await fetch(`/locales/${lang}/common.json`)
      if (response.ok) {
        const data = await response.json()
        setTranslations(data)
      } else {
        // Fallback to English if language file not found
        const fallbackResponse = await fetch(`/locales/${DEFAULT_LOCALE}/common.json`)
        const fallbackData = await fallbackResponse.json()
        setTranslations(fallbackData)
      }
    } catch (error) {
      console.error('Error loading translations:', error)
      // Load English as fallback
      try {
        const fallbackResponse = await fetch(`/locales/${DEFAULT_LOCALE}/common.json`)
        const fallbackData = await fallbackResponse.json()
        setTranslations(fallbackData)
      } catch (fallbackError) {
        console.error('Error loading fallback translations:', fallbackError)
      }
    } finally {
      setLoading(false)
    }
  }

  const changeLanguage = (newLocale: string) => {
    if (SUPPORTED_LOCALES.includes(newLocale)) {
      setLocale(newLocale)
      localStorage.setItem('locale', newLocale)
      loadTranslations(newLocale)
    }
  }

  const t = (key: string, defaultValue?: string) => {
    const keys = key.split('.')
    let value = translations
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return defaultValue || key
      }
    }
    
    return typeof value === 'string' ? value : defaultValue || key
  }

  return {
    locale,
    translations,
    loading,
    changeLanguage,
    t,
    supportedLocales: SUPPORTED_LOCALES
  }
} 