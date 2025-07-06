'use client'
import Link from 'next/link'
import { useState } from 'react'
import '@/styles/navbar.scss'

export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
            <img src="/logo.svg" alt="LangLift logo" className="navbar__logo-img" />
            <Link href="/" className="navbar__logo-text">LangLift</Link>
        </div>

        <button className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={`navbar__nav ${menuOpen ? 'open' : ''}`}>
            <a href="#about" className="navbar__link" onClick={() => setMenuOpen(false)}>О проекте</a>
            <a href="#pricing" className="navbar__link" onClick={() => setMenuOpen(false)}>Тарифы</a>
            <a href="#contact" className="navbar__link" onClick={() => setMenuOpen(false)}>Контакты</a>
        </nav>
      </div>
    </header>
  )
}
