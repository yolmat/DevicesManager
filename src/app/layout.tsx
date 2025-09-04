import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { AlertProvider } from "./context/AlertContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devices Manager",
  description: "Gerencie todos os dispotivios dentro da sua empresa",
  keywords: ["Gerenciamento", "Dispositivos", "Criação", "Next.js"],
  openGraph: {
    title: "Devices manager | Gerenciador de dispositivos",
    description: "Gerencie todos os dispotivios dentro da sua empresa",
    url: "https://devices.msaraiva.dev.br",
    siteName: "Device Manager",
    images: [
      {
        url: "og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Imagem de compartilhamento",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AlertProvider>
            <Toaster richColors />
            {children}
          </AlertProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
