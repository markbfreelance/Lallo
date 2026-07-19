import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  themeColor: "#051A26", // river-950
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Municipality of Lallo, Cagayan — Official Portal",
  description:
    "Official website of the Municipality of Lallo, Province of Cagayan, Philippines. Explore tourism, local governance, public ordinances, and community updates. Where the Cagayan River meets history.",
  keywords: [
    "Lallo",
    "Cagayan",
    "Municipality",
    "Philippines",
    "LGU",
    "tourism",
    "Cagayan River",
    "local government",
    "ordinances",
    "transparency",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='50' fill='%23C18E4E'/><text y='50%' x='50%' dominant-baseline='middle' text-anchor='middle' font-family='serif' font-size='50' font-weight='bold' fill='%23ffffff'>L</text></svg>",
  },
  openGraph: {
    title: "Municipality of Lallo, Cagayan — Official Portal",
    description:
      "Explore the heritage, governance, and natural beauty of Lallo, Cagayan. Your gateway to the mouth of the Cagayan River.",
    type: "website",
    locale: "en_PH",
    siteName: "Municipality of Lallo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
