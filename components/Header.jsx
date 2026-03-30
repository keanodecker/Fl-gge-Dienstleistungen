'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { FaTiktok, FaInstagram } from 'react-icons/fa';

const navItems = [
  { label: 'Unsere Dienstleistungen', href: '#services', scroll: true },
  { label: 'Über uns', href: '#about', scroll: true },
  { label: 'Preise', href: '#pricing', scroll: true },
  { label: 'Kontakt aufnehmen', href: '/kontakt', scroll: false },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 shadow-md bg-white">
              <Image
                src="/logo.png"
                alt="Flügge Bodenbeläge"
                fill
                className="object-contain p-1"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.scroll ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollClick(e, item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              )
            )}
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
              {navItems.map((item) =>
                item.scroll ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScrollClick(e, item.href)}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  >
                    {item.label}
                  </Link>
                )
              )}
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
