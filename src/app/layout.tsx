import type { Metadata } from "next";

import "@/styles/typography.css";

import "./globals.css";

import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";


export const metadata: Metadata = {
  title: "دُکترِتو",
  description: "پلتفرم جامع جستجوی دکتر و رزور نوبت آنلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <p className="tagline">
          نوبت دهی پزشکی، سامانه نوبت دهی اینترنتی بیمارستان و پزشکان
        </p>
        <FooterComponent />
      </body>
    </html>
  );
}
