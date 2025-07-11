import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Setup fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Podware - Gamified Podcast Platform",
  description: "Listen, learn, and earn with Podware - the gamified podcast platform that makes podcasting addictive with coins, clips, and rewards.",
  openGraph: {
    title: "Podware - Gamified Podcast Platform",
    description: "Listen, learn, and earn with Podware - the gamified podcast platform that makes podcasting addictive with coins, clips, and rewards.",
    images: ['/og-image.png'],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans bg-[#121212] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
