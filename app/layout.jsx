// Self-hosted fonts (bundled at build time, no request to Google Fonts).
import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/jetbrains-mono';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_PORTFOLIO_BASE_PATH ?? '';

export const metadata = {
  title: 'Davit Hakobyan | Full-Stack Developer',
  description: 'Portfolio of Davit Hakobyan, a full-stack developer in Yerevan. Seven live projects across developer tools, client websites and real-time web applications.',
  icons: { icon: `${basePath}/mark.svg` },
  openGraph: {
    title: 'Davit Hakobyan | Full-Stack Developer',
    description: 'TypeScript across the stack: React, Next.js, NestJS, PostgreSQL.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="top">{children}</body>
    </html>
  );
}
