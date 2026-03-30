'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaTiktok, FaInstagram } from 'react-icons/fa';

const navItems = [
  { label: 'Unsere Dienstleistungen', href: '#services' },
  { label: 'Über uns', href: '#about' },
  { label: 'Preise', href: '#pricing' },
  { label: 'Termin vereinbaren', href: 'tel:+491234567890' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-primary-foreground rounded-sm transform rotate-45"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-bold text-lg leading-tight">FLÜGGE</span>
              <span className="text-primary text-xs leading-tight">Bodenbeläge</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.tiktok.com/@fluegge_dienstleistungen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-200"
              aria-label="TikTok"
            >
              <FaTiktok className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/fluegge_bodenbelaege/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-foreground hover:text-primary transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a
                  href="https://www.tiktok.com/@fluegge_dienstleistungen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/fluegge_bodenbelaege/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
