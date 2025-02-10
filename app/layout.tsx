import type { Metadata } from "next";
import "./globals.css";
 
export const metadata: Metadata = {
  title: "Vaarahi-Hospitals",
  description: "Creted Using next js",
};

import NavBar from '@/components/NavBar' ;
import Footer from '../components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div> 
            <div> 
              <NavBar />
            </div> 
            <main className="mt-10 pt-16  font-info" >{children}</main>
            <Footer />
        </div>
      </body>
    </html>
  );
}
