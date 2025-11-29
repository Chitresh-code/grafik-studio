import { createContext, useContext, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type CalendlyContextValue = {
  openCalendly: () => void
}

const CalendlyContext = createContext<CalendlyContextValue | undefined>(undefined)

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
      initBadgeWidget?: (options: {
        url: string
        text: string
        color: string
        textColor: string
        branding?: boolean
      }) => void
    }
  }
}

const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'
const CALENDLY_STYLE_HREF = 'https://assets.calendly.com/assets/external/widget.css'
const CALENDLY_URL = 'https://calendly.com/girishgyanani99'
const BADGE_CONFIG = {
  url: CALENDLY_URL,
  text: 'Schedule time with me',
  color: '#0069ff',
  textColor: '#ffffff',
  branding: true,
}

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isCalendlyReady, setIsCalendlyReady] = useState(() => Boolean(window.Calendly))
  const shouldOpenWhenReady = useRef(false)

  useEffect(() => {
    ensureCalendlyStyles()

    if (window.Calendly) {
      setIsCalendlyReady(true)
      window.Calendly.initBadgeWidget?.(BADGE_CONFIG)
      return
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`
    )

    if (existingScript) {
      existingScript.addEventListener('load', handleScriptLoad)
      return () => {
        existingScript.removeEventListener('load', handleScriptLoad)
      }
    }

    const script = document.createElement('script')
    script.src = CALENDLY_SCRIPT_SRC
    script.async = true
    script.addEventListener('load', handleScriptLoad)
    document.body.appendChild(script)

    return () => {
      script.removeEventListener('load', handleScriptLoad)
    }
  }, [])

  useEffect(() => {
    if (isCalendlyReady && shouldOpenWhenReady.current) {
      shouldOpenWhenReady.current = false
      window.Calendly?.initPopupWidget({ url: CALENDLY_URL })
    }
  }, [isCalendlyReady])

  const openCalendly = () => {
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
      return
    }
    shouldOpenWhenReady.current = true
  }

  function handleScriptLoad() {
    setIsCalendlyReady(true)
    window.Calendly?.initBadgeWidget?.(BADGE_CONFIG)
  }

  return (
    <CalendlyContext.Provider value={{ openCalendly }}>{children}</CalendlyContext.Provider>
  )
}

export function useCalendly() {
  const context = useContext(CalendlyContext)
  if (!context) {
    throw new Error('useCalendly must be used within a CalendlyProvider')
  }
  return context
}

function ensureCalendlyStyles() {
  const existingLink = document.querySelector<HTMLLinkElement>(
    `link[href="${CALENDLY_STYLE_HREF}"]`
  )
  if (existingLink) {
    return
  }
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = CALENDLY_STYLE_HREF
  document.head.appendChild(link)
}
