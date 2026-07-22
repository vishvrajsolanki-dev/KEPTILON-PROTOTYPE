import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/lib/theme";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Keptilon — One house for the whole arc",
    template: "%s | Keptilon",
  },
  description:
    "Keptilon is a house of ventures for clearer decisions — Destiny, Academy, TalentX, CofWaf and Venture. Guidance that does not stop at advice.",
  metadataBase: new URL("https://keptilon.com"),
  openGraph: {
    title: "Keptilon — One house for the whole arc",
    description:
      "A house of ventures for people, professionals, founders and businesses. Guidance that does not stop at advice.",
    url: "https://keptilon.com",
    siteName: "Keptilon",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="parchment" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('keptilon-theme');if(t==='parchment'||t==='night')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${fraunces.variable} ${manrope.variable} antialiased`}>
        <ThemeProvider>
          <div className="grain" aria-hidden />
          <div className="site-shell">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
