import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Lake & Wells — Interior Design Studio, Chicago",
  description:
    "Lake & Wells is a Chicago interior design studio for homeowners, developers, and design-led brands. Residential, commercial, and developer fit-out across Chicago and the North Shore."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-ink">
        <LenisProvider>
          <PageTransition />
          <Nav />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
