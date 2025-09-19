import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import LandingPage from './pages/LandingPage'
import CoverLetter from './pages/CoverLetter'
import Resume from './pages/Resume'
import Reflection1 from './pages/Reflection1'
import Reflection2 from './pages/Reflection2'
import References from './pages/References'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('landing')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['landing', 'cover-letter', 'resume', 'reflection1', 'reflection2', 'references']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="portfolio">
      <Navigation 
        activeSection={activeSection} 
        onNavigate={scrollToSection}
      />
      
      <main className="portfolio-content">
        <section id="landing" className="portfolio-section">
          <LandingPage />
        </section>

        <section id="cover-letter" className="portfolio-section">
          <CoverLetter />
        </section>

        <section id="resume" className="portfolio-section">
          <Resume />
        </section>

        <section id="reflection1" className="portfolio-section">
          <Reflection1 />
        </section>

        <section id="reflection2" className="portfolio-section">
          <Reflection2 />
        </section>

        <section id="references" className="portfolio-section">
          <References />
        </section>
      </main>
    </div>
  )
}

export default App
