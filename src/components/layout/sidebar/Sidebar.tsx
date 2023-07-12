"use client";
import { useMemo } from "react";

import { usePathname } from "next/navigation";
import { Box } from "@/design-system";
import { cn } from "@/lib";
import { RouteType } from "./types";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const routers = useMemo(() => {
    const routeData: RouteType[] = [
      {
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        label: "Search",
        active: pathname === "/search",
        href: "/",
      },
    ];

    return routeData;
  }, [pathname]);

  return (
    <div className="flex h-full">
      <div className="hidden md:flex  flex-col gap-y-2  h-full w-[300px] p-2">
        <Box>
          <div className={cn("flex flex-col gap-y-4 px-5 py-4")}>
            {routers.map(({ active, href, label }, index) => (
              <SidebarItem
                key={index}
                active={active}
                href={href}
                label={label}
              />
            ))}
          </div>
        </Box>
        <main> {children}</main>
      </div>
    </div>
  );
}
