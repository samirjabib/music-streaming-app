import RootProvider from "@/context/RootProvider";
import "./globals.css";

import { Poppins } from "next/font/google";
import Sidebar from "@/components/layout/sidebar/Sidebar";

const poppis = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Music Beats App",
  description: "Listen Beats",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppis.className}>
        <RootProvider>
          <Sidebar>{children}</Sidebar>
        </RootProvider>
      </body>
    </html>
  );
}
