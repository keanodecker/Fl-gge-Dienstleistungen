'use client';

import { motion } from 'framer-motion';
import { Layers, Home, Wrench, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    icon: Layers,
    title: 'Vinyl',
    description:
      'Moderne Vinylböden in höchster Qualität. Robust, pflegeleicht und in vielen Designs erhältlich – perfekt für jeden Raum.',
  },
  {
    icon: Home,
    title: 'Parkett',
    description:
      'Echtholzparkett für zeitlose Eleganz. Wir verlegen und versiegeln Ihr Parkett fachgerecht für jahrzehntelange Freude.',
  },
  {
    icon: Wrench,
    title: 'Renovierung',
    description:
      'Professionelle Bodenrenovierung und -sanierung. Wir bringen alte Böden wieder zum Glänzen oder verlegen komplett neu.',
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1643746899700-dfc575d8c8cf"
            alt="Hochwertiger Parkettboden"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-primary-foreground mb-6">
              Ihr Bodenleger aus dem Ortenaukreis
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Vinyl, Parkett &amp; Renovierung – aus Schuttertal für die Region.
            </p>
            <a href="tel:+491234567890" className="btn-primary inline-block">
              Jetzt Termin vereinbaren
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-background">
        <div className="container-custom">
          <div className="section-heading">
            <h2 className="text-foreground mb-4">Unsere Dienstleistungen</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professionelle Bodenverlegung mit Leidenschaft und Präzision. Wir bieten Ihnen erstklassige
              Handwerkskunst für jeden Bedarf.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-secondary-foreground mb-8 text-center">Über uns</h2>
              <div className="space-y-6 text-secondary-foreground/90 text-lg">
                <p>
                  Flügge Dienstleistungen ist Ihr verlässlicher Partner für hochwertige Bodenbeläge im
                  Ortenaukreis. Mit Sitz in Schuttertal sind wir tief in der Region verwurzelt und kennen die
                  Bedürfnisse unserer Kunden.
                </p>
                <p>
                  Unser Handwerk verstehen wir als Kunst – jeder Boden wird mit größter Sorgfalt und Präzision
                  verlegt. Ob Vinyl, Parkett oder Renovierung: Wir setzen auf Qualität, Zuverlässigkeit und
                  persönliche Beratung.
                </p>
                <p>
                  Als regionaler Handwerksbetrieb legen wir Wert auf kurze Wege, faire Preise und langfristige
                  Kundenbeziehungen. Ihr Zuhause verdient das Beste – und genau das liefern wir.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-foreground mb-8">Preise</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Jedes Projekt ist einzigartig – und so sind auch unsere Angebote. Die Kosten für Ihren neuen
                Boden hängen von verschiedenen Faktoren ab: Raumgröße, gewähltes Material,
                Untergrundvorbereitung und individuelle Wünsche.
              </p>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                Wir erstellen Ihnen gerne ein maßgeschneidertes Angebot, das genau auf Ihre Bedürfnisse
                zugeschnitten ist. Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches
                Angebot.
              </p>
              <a href="tel:+491234567890" className="btn-secondary inline-block">
                Angebot anfordern
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6">Termin vereinbaren</h2>
              <p className="text-xl mb-12 opacity-90 leading-relaxed">
                Bereit für Ihren neuen Traumboden? Rufen Sie uns an oder schreiben Sie uns – wir beraten Sie
                gerne und finden gemeinsam die perfekte Lösung für Ihr Zuhause.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <a
                    href="tel:+491234567890"
                    className="text-xl font-semibold hover:opacity-80 transition-opacity"
                  >
                    +49 123 456 7890
                  </a>
                </div>
                <div className="hidden sm:block opacity-50">|</div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  <a
                    href="mailto:info@fluegge-dienstleistungen.de"
                    className="text-xl font-semibold hover:opacity-80 transition-opacity"
                  >
                    info@fluegge-dienstleistungen.de
                  </a>
                </div>
              </div>

              <a
                href="tel:+491234567890"
                className="inline-block bg-primary-foreground text-primary px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:brightness-95 active:scale-[0.98] shadow-xl"
              >
                Jetzt anrufen
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
