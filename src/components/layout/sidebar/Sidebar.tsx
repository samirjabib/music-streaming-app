"use client";

import { usePathname } from "next/navigation";

import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { useMemo } from "react";
import { RouteType } from "./types";
import { Box, Icons } from "@/design-system";
import { cn } from "@/lib";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const pathname = usePathname();

  const routes: RouteType[] = useMemo(
    () => [
      {
        icon: Icons.home,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: Icons.search,
        label: "Search",
        href: "/search",
        active: pathname === "/search",
      },
    ],
    [pathname]
  );

  return (
    <div
      className={cn(
        `
        flex 
        h-full
        `
        // player.activeId && "h-[calc(100%-80px)]"
      )}
    >
      <div
        className="
          hidden 
          md:flex 
          flex-col 
          gap-y-2 
          h-full 
          w-[300px] 
          p-2
        "
      >
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
