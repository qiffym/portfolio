import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import './globals.css';

export const metadata = {
  title: 'Qiff Ya Muhammad',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="corporate">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
