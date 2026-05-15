import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "HopeBridge | Small Donations. Massive Impact.",
    template: "%s | HopeBridge"
  },
  description: "HopeBridge is a modern donation platform connecting donors with impactful campaigns globally. Join us in making a difference through transparent and secure giving.",
  keywords: ["donation", "charity", "nonprofit", "philanthropy", "social impact", "HopeBridge", "clean water", "education", "healthcare"],
  authors: [{ name: "HopeBridge Team" }],
  creator: "HopeBridge Foundation",
  publisher: "HopeBridge Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hope-bridge.alshaimon.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HopeBridge | Small Donations. Massive Impact.",
    description: "Empowering communities and changing lives through transparent, direct, and impactful donations.",
    url: "https://hope-bridge.alshaimon.com",
    siteName: "HopeBridge",
    images: [
      {
        url: "/og-image.jpg", // User would need to provide this
        width: 1200,
        height: 630,
        alt: "HopeBridge Donation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HopeBridge | Small Donations. Massive Impact.",
    description: "Empowering communities and changing lives through transparent, direct, and impactful donations.",
    creator: "@hopebridge",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
