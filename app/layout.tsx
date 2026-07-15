import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xcubate — De l'innovation au business en 90 jours",
  description:
    "Xcubate transforme les projets R&D et innovation en business viables grâce à un protocole d'expérimentation à haute fréquence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${cormorant.variable} ${robotoMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
