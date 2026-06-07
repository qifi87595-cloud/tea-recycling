import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WeChatFloat from "@/components/WeChatFloat";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-sc",
});

export const metadata: Metadata = {
  title: "杨记茶叶 | 专业茶叶回收",
  description:
    "杨记茶叶 — 专业普洱茶回收、中粮回收、老茶回收，专业品鉴，价格公道，当天到账。",
  keywords: "茶叶回收,普洱茶回收,老茶回收,中粮回收,杨记茶叶",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <WeChatFloat />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
