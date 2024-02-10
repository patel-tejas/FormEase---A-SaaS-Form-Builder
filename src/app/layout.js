import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FormEase",
  description: "SaaS app to build forms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${inter.className} mx-10 my-5`}>
      <Navbar />
        {children}
      </body>
    </html>
  );
}
