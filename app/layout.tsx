import "./globals.css";
import "lenis/dist/lenis.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ReactLenis } from "@/utils/lenis";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <ReactLenis root>
        <body className={`flex min-h-screen flex-col font-sans antialiased`}>
          <header>
            <Navbar />
          </header>
          <main className="grow">{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </ReactLenis>
    </html>
  );
}
