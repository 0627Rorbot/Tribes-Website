import "./globals.css";
import "../assets/css/style.scss";

import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>12 Tribes Website</title>
      </head>
      <body className="min-w-screen min-h-screen overflow-x-hidden">
        <div className="fixed left-2/4 top-2/4 -z-[1] w-[400vw] h-[400vh] mt-[-200vh] ml-[-200vw] animate-[spin_240s_linear_infinite] bg-[length:240px_240px] bg-space origin-center bg-black"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
