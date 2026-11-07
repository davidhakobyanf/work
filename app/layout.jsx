import './globals.css';

const basePath = process.env.NEXT_PUBLIC_PORTFOLIO_BASE_PATH;

export const metadata = {
  title: 'Davit Hakobyan | Full-Stack Developer',
  description: 'Portfolio of Davit Hakobyan, a full-stack developer in Yerevan. Explore seven projects across developer tools, client websites and real-time web applications.',
  icons: { icon: `${basePath}/mark.svg` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
