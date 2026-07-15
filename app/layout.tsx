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
  metadataBase: new URL("https://xcubate-innovation-90.alainbriez.chatgpt.site"),
  title: "Xcubate — Enterprise innovation at maximum velocity",
  description:
    "Xcubate gives enterprise teams the speed and focus to turn high-potential innovation projects into validated businesses in 90 days.",
  openGraph: {
    title: "Xcubate — Enterprise innovation at maximum velocity",
    description:
      "Accelerate high-potential projects with your teams. Validate the business in 90 days.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Xcubate — Enterprise innovation at maximum velocity" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xcubate — Enterprise innovation at maximum velocity",
    description:
      "Accelerate high-potential projects with your teams. Validate the business in 90 days.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} ${robotoMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
