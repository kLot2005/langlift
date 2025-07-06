import "@/styles/globals.scss";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Foother";

export const metadata = {
  title: 'LangLift — Учим языки через общение',
  description: 'Изучай иностранные языки через живое общение. Онлайн-платформа с упором на разговорную практику.',
  keywords: ['языки', 'изучение языков', 'разговорный английский', 'LangLift'],
  metadataBase: new URL('https://langlift.vercel.app'), // твой домен
  openGraph: {
    title: 'LangLift — Учим языки через общение',
    description: 'Онлайн-платформа для изучения языков через реальное общение.',
    url: 'https://langlift.vercel.app',
    siteName: 'LangLift',
    images: [
      {
        url: '/og-image.png', // картинка для превью
        width: 1200,
        height: 630,
        alt: 'LangLift превью',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LangLift — Учим языки через общение',
    description: 'Платформа для изучения языков через живое общение',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/apple-touch-icon.png',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
