import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-black">
          <div className="flex justify-center">
            <Link className="text-lg font-medium text-white p-3" href="/">
              Home
            </Link>
            <Link
              className="text-lg font-medium text-white p-3"
              href="/component/tier1"
            >
              Tier 1
            </Link>
            <Link
              className="text-lg font-medium text-white p-3"
              href="/component/tier2"
            >
              Tier 2
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
