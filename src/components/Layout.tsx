'use client'

import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode;
  showNavigation?: boolean;
  showFooter?: boolean;
}

export default function Layout({ children, showNavigation = true, showFooter = true }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showNavigation && <Navigation />}
      <main className={`flex-1 ${showNavigation ? 'pt-16' : ''}`}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  )
} 