import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumina - AI Builder",
  description: "Build the visual future without losing control of your code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-[#030014]">
        
    
        <Navbar />
        
        {children}
        
      </body>
    </html>
  );
}