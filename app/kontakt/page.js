import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata = {
  title: 'Kontakt – Flügge Bodenbeläge',
  description: 'Nehmen Sie Kontakt mit uns auf. Wir sind per WhatsApp oder Telefon erreichbar.',
};

const WHATSAPP_LINK = 'https://wa.me/4917641649481';
const PHONE_NUMBER = '0176 41649481';
const PHONE_HREF = 'tel:+4917641649481';

export default function KontaktPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="container-custom py-20">
          <div className="max-w-lg mx-auto text-center">
            {/* WhatsApp Icon Circle */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                <FaWhatsapp className="w-12 h-12 text-green-500" />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Schreiben Sie uns auf WhatsApp
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Für Bestellungen, Anfragen oder Fragen – wir sind auf WhatsApp erreichbar und antworten so schnell wie möglich!
            </p>

            {/* WhatsApp Button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 active:scale-[0.98] shadow-lg hover:shadow-xl mb-8"
            >
              <FaWhatsapp className="w-6 h-6" />
              WhatsApp öffnen
            </a>

            {/* Phone fallback */}
            <p className="text-muted-foreground text-sm">
              Oder rufen Sie uns an:{' '}
              <a
                href={PHONE_HREF}
                className="text-primary font-semibold hover:underline"
              >
                {PHONE_NUMBER}
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
