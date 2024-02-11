import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Footer from "./(components)/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FormEase",
  description: "SaaS app to build forms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${inter.className} mx-10 my-5`}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* <div className="h-[5vh] bg-pink-500 text-white w-full text-center">
        🎉 Fill form once and then we are there for your convenience ! 🎉
        </div> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
