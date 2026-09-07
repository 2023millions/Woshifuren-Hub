import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Woshifuren Hub｜建立你的投资认知体系",
  description: "从市场逻辑到实战策略，面向中文投资者的系统化在线课程。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
