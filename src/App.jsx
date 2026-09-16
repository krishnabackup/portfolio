import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from './components/Education'

export default function App() {
  return (
    <div className="relative">
      <div className="bg-glow pointer-events-none fixed inset-0 z-0" />
      <Cursor />
      <Navbar />
      <main className="relative z-1">
        <Hero />
        <Highlights />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education/>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
