import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import Footer from "../components/Footer";
import UserNavbar from "../components/UserNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FindMyHotel",
  description: "Created By Nishant chaudhary",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <UserNavbar />

          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
