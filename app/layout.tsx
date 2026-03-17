import "./globals.css";
import "lenis/dist/lenis.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ReactLenis } from "@/utils/lenis";

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
        <body className={`font-sans antialiased`}>
          <main>{children}</main>
        </body>
      </ReactLenis>
    </html>
  );
}
