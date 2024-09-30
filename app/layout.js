import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Home - hellobd.news",
  description:
    "সর্বশেষ · বাংলাদেশ · বিশ্ব · বাণিজ্য · খেলা · বিনোদন · লাইফস্টাইল · বিজ্ঞান ও প্রযুক্তি · স্থাপত্য ও প্রকৌশল · সফল মুখ · অন্যান্য · পরিবেশ · ফটোফিচার · ভিডিও · মুখোমুখি · রাজনীতি · শিক্ষা ·",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
