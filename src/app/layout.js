import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <link rel="icon" href="/favicon.ico" />
      <body>
        {children}
      </body>
    </html>
  );
}
