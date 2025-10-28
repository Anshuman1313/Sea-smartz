'use client'


import { useLenis } from 'lenis/react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function LenisController() {
  const lenis = useLenis()
  const pathname = usePathname()

  useEffect(() => {
    if (lenis) {
      // Scroll to top immediately
      lenis.scrollTo(0, { immediate: true })
      
      // Force resize after a short delay to recalculate height
      setTimeout(() => {
        lenis.resize()
      }, 100)
      
      // Backup delayed call for dynamic content
      setTimeout(() => {
        lenis.resize()
      }, 500)
    }
  }, [pathname, lenis])

  return null
}
