import './globals.css';
//import '../styles/font-awesome.min.css';
import '../styles/swiper.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" />
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
