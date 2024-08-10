import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EcoShopper",
  description: "EcoShopper é uma plataforma de e-commerce que oferece uma ampla gama de produtos sustentáveis e ecológicos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
