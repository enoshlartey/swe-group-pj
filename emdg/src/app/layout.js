import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Recruit.",
  description: "Find your next recruit!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Next Recruit.",
    description: "Find your next recruit!",
    url: "https://emdg-swe.vercel.app/",
    siteName: "Next Recruit.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Recruit.",
    description: "Find your next recruit!",
    images: ["/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
  themeColor: "#ffffff",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full px-9 py-9 flex justify-between">
          <div>
            <h4 className="text-2xl font-black">
              <a href="/">Next Recruit.</a>
            </h4>
          </div>
          <div className="flex gap-4">
            <a href="pages/schools">Schools</a>
            <a href="pages/howto">How to</a>
          </div>
        </nav>
        
        {children}

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <p className="text-sm/6 text-center font-[family-name:var(--font-geist-mono)]">
            Find the next best talent!
          </p>
        </footer>
      </body>
    </html>
  );
}
