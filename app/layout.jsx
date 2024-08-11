import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "EcoShopper",
  description: "EcoShopper é uma plataforma de e-commerce que oferece uma ampla gama de produtos sustentáveis e ecológicos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.variable}>
        <Header />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
