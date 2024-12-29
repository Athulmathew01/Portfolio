
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";


export const metadata = {
  title: "Home page",
  description: "Portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
