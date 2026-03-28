import './globals.css';

export const metadata = {
  title: 'Flügge Dienstleistungen - Bodenleger aus Schuttertal',
  description: 'Ihr Bodenleger aus dem Ortenaukreis. Vinyl, Parkett & Renovierung – aus Schuttertal für die Region.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
