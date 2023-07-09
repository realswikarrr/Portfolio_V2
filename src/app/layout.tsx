import Header from "@/components/Header";
import "../styles/globals.css";
import "../styles/posts.css";
import type { Metadata } from "next";
import theme from "@/data/theme";
import BlurCircle from "@/components/BlurCircle";

export const metadata: Metadata = {
  title: "Personal Portfolio / Blog",
  description: "Personal Portfolio of Swikar Adhikari.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 bg-neutral-950 px-10 py-8 text-sm text-neutral-400 md:gap-20 md:py-16">
        <Header />
        <BlurCircle position="top" color={theme.colors.blur.top} />
        <BlurCircle position="bottom" color={theme.colors.blur.bottom} />

        {children}
      </body>
    </html>
  );
}
