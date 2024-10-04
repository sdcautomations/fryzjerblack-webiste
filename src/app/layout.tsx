import { Rubik } from "next/font/google";

import "../index.scss";

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Salon Fryjzerski Black</title>
      </head>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
