import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { register } from "swiper/element";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ticket-OhSee",
  description: "Ticket-OhSee",
};

register(); // swiper 사용을 위한

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body data-theme='light_mode' className={inter.className}>{children}</body>
    </html>
  );
}
