import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "SR Herbal Products – 100% Natural Guava Leaf Tea",
  description:
    "Discover SR Herbal Products – India's premium herbal wellness brand. Pure, natural Guava Leaf Tea (Peru Leaf Tea) with zero chemicals. Rich in antioxidants, supports digestion, immunity & blood sugar.",
  keywords:
    "guava leaf tea, peru leaf tea, herbal tea india, natural tea, ayurvedic tea, SR herbal products, herbal wellness",
  openGraph: {
    title: "SR Herbal Products – 100% Natural Guava Leaf Tea",
    description:
      "Premium quality Guava Leaf Tea crafted from hand-picked leaves. Chemical-free, natural, and rich in antioxidants.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
