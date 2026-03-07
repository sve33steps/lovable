import type { ReactNode } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/text-page.css'

interface TextPageProps {
  children: ReactNode
}

/**
 * Layout wrapper for text-heavy pages (Privacy Policy, Terms, etc.)
 * Uses the same Nav and Footer as the main landing page.
 * Wrap your content in <div className="prose"> for styled headings and text.
 */
export default function TextPage({ children }: TextPageProps) {
  return (
    <>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <Nav />
      </div>
      <main id="main-content">
        <section id="text-page">
          <div className="grid-row">
            <div className="grid-side"></div>
            <div className="grid-content">
              <div className="text-page-content">
                {children}
              </div>
            </div>
            <div className="grid-side"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
