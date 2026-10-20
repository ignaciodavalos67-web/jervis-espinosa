import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jervis & Espinosa | Firma de Abogados en Ecuador",
  description:
    "Somos tu equipo, tú nuestra prioridad. Firma legal ecuatoriana con visión integral, asesorando a empresas e instituciones con excelencia, ética e innovación.",
  keywords: [
    "Jervis & Espinosa",
    "Abogados Ecuador",
    "Firma legal Quito",
    "Derecho Corporativo",
    "Litigio",
    "Arbitraje",
    "Derecho Tributario",
  ],
  authors: [{ name: "Jervis & Espinosa" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${plusJakarta.variable}`}
    >
      <body className="site-shell font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
