import type { Metadata } from "next";
import { Syne, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suraj Vishwakarma | Full Stack Developer & AI Engineer",
  description:
    "Portfolio of Suraj Vishwakarma — Full Stack Developer & AI Engineer building scalable web applications, machine learning platforms, and intelligent digital products.",
  keywords: [
    "Suraj Vishwakarma",
    "Full Stack Developer",
    "AI Engineer",
    "GenAI Developer",
    "Next.js Developer",
    "Python AI",
    "FastAPI",
    "Machine Learning Portfolio",
    "IntelliTwin AI",
    "PulseSocial",
    "Three.js Portfolio",
  ],
  authors: [{ name: "Suraj Vishwakarma" }],
  creator: "Suraj Vishwakarma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://surajvishwakarma.dev",
    title: "Suraj Vishwakarma | Full Stack Developer & AI Engineer",
    description:
      "Building intelligent digital experiences, enterprise SaaS platforms, and cutting-edge machine learning engines.",
    siteName: "Suraj Vishwakarma Portfolio",
    images: [
      {
        url: "/assets/suraj-developer.jpg",
        width: 1024,
        height: 1024,
        alt: "Suraj Vishwakarma 3D AI Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Vishwakarma | Full Stack Developer & AI Engineer",
    description:
      "Building intelligent digital experiences, enterprise SaaS platforms, and cutting-edge machine learning engines.",
    images: ["/assets/suraj-developer.jpg"],
    creator: "@surajvishwakarma",
  },
  metadataBase: new URL("https://surajvishwakarma.dev"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Suraj Vishwakarma",
    jobTitle: "Full Stack Developer & AI Engineer",
    url: "https://surajvishwakarma.dev",
    image: "https://surajvishwakarma.dev/assets/suraj-developer.jpg",
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "M.Sc. Information Technology",
      },
      {
        "@type": "EducationalOrganization",
        name: "B.Sc. Information Technology",
      },
    ],
    knowsAbout: [
      "Full Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Next.js",
      "Python",
      "FastAPI",
      "Three.js",
      "PostgreSQL",
    ],
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-[#F3F4F6] min-h-screen selection:bg-[#FF5A0A] selection:text-white font-[family-name:var(--font-body)] antialiased overflow-x-hidden">
        {/* Subtle persistent film grain overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 film-grain" />
        {children}
      </body>
    </html>
  );
}
