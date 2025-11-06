import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis"
import Footer from "./components/Layout/Footer";
import Navbar2 from "./components/Layout/Navbar2";
import { Toaster } from "sonner";
import LenisController from "./components/LenisController";
import MobileNav from "./components/Layout/MobileNav";
import { Banner } from "./components/landingpage/Banner";
import CookieConsent from "./components/Layout/CookieConsent";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sea Smartz - Smart Software Solutions & Digital Transformation Services",
  description: "Sea Smartz delivers innovative software solutions, AI-powered applications, and digital transformation services to help businesses scale and succeed in the digital age.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
         <head>
        {/*  Google Tag Manager Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W9M5K4CK');
          `}
        </Script>
      </head>
      <ReactLenis root>
        <body
          suppressHydrationWarning
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
        >
           {/* second script tab manager */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9M5K4CK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
          <LenisController />
          <main className="min-h-screen text-muted-foreground flex flex-col mx-auto">
            <Banner/>
            <MobileNav/>
            <Navbar2 />
            
            {/* <Navbar/> */}
            {children}
          </main>
         <CookieConsent/>
          <Footer />
          <Toaster />
        </body>
      </ReactLenis>
    </html>
  );
}
