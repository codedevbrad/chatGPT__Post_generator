'use client'

import Header from './landingComponents/header'
import HeroComponent from './landingComponents/hero'
import FeaturesComponent from './landingComponents/features'
import FaqsComponent from './landingComponents/faqs'

export default function IndexPage() {
  return (
    <div className="bg-white">
        <Header />

        <main className="isolate">
          {/* Hero section */}
          <HeroComponent />       
          {/* Feature section */}
          <FeaturesComponent />
          {/* FAQs */}
          <FaqsComponent />
        </main>
    </div>
  )
}
