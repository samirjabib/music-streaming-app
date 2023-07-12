"use client";
import { FC, useEffect } from "react";

import { usePathname } from "next/navigation";
import setupViewportHeight from "@/helpers";
import ThemeProvider from "./ThemeProvider";

type ProviderRootProps = {
  children: React.ReactNode;
};

const RootProvider: FC<ProviderRootProps> = ({ children }) => {
  useEffect(() => {
    return setupViewportHeight(); //https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  }, []);

  // Temporary solution for scroll on route change for Next.js 13 --> https://github.com/vercel/next.js/issues/28778
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
};

export default RootProvider;
