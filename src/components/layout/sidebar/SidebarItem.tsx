import Link from "next/link";
import { RouteType } from "./types";
import { cn } from "@/lib";
import { Icons } from "@/design-system";

export default function SidebarItem({ active, href, label, icon }: RouteType) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-row h-auto items-center w-full gap-x-4 font-medium cursor-pointer",
        "text transition hover:text-white py-1"
      )}
    >
      {/* REMBEMBER ADD ICON */}
      {label}
    </Link>
  );
}
