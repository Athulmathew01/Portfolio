
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { Suspense } from "react";
import Loading from "./loading";


export const metadata = {
  title: "Home page",
  description: "Portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Suspense fallback={<Loading/>}>
        <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
