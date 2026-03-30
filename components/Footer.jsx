'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaTiktok, FaInstagram } from 'react-icons/fa';

const navLinks = [
  { label: 'Unsere Dienstleistungen', href: '#services', scroll: true },
  { label: 'Über uns', href: '#about', scroll: true },
  { label: 'Preise', href: '#pricing', scroll: true },
  { label: 'Kontakt aufnehmen', href: '/kontakt', scroll: false },
];

export default function Footer() {
  const handleScrollClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <Image
            src="/logo.png"
            alt="Flügge Bodenbeläge"
            width={112}
            height={112}
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
          {navLinks.map((link) =>
            link.scroll ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollClick(e, link.href)}
                className="hover:opacity-80 transition-opacity duration-200 font-medium"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="hover:opacity-80 transition-opacity duration-200 font-medium"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.tiktok.com/@fluegge_dienstleistungen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-200"
            aria-label="TikTok"
          >
            <FaTiktok className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/fluegge_bodenbelaege/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-200"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="#impressum" className="hover:opacity-80 transition-opacity duration-200">
            Impressum
          </a>
          <span>•</span>
          <a href="#datenschutz" className="hover:opacity-80 transition-opacity duration-200">
            Datenschutz
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm opacity-80">
          © {new Date().getFullYear()} Flügge Dienstleistungen. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
