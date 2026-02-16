import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Building Scalable Digital Products",
  description: "Modern Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} font-sans bg-[#0a0a0c] text-[#f6f6f8]`}>
        {children}
      </body>
    </html>
  );
}
