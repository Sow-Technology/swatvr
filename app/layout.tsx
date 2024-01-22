import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cousine } from "next/font/google";
import "./globals.css";
import ScrollProvider from "@/components/providers/ScrollProvider";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import Gradients from "@/components/Gradients";
const inter = Inter({ subsets: ["latin"] });
const cousine = Cousine({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cousine",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SWAT VR | Best VR rentals in India",
  description: "Immerse Yourself in Limitless Virtual Adventures",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth ">
      <body
        data-scroll-section
        className={`${inter.className} bg-[#1A232E]  ${cousine.variable}`}
        suppressHydrationWarning
      >
        <NextTopLoader
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
        />
        <Toaster />
        {/* <ScrollProvider>{children}</ScrollProvider> */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
