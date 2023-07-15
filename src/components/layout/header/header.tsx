"use client";

import { AuthModal, RegisterModal } from "@/components/auth";
import { Icons, ThemeDropDown } from "@/design-system";
import { cn } from "@/lib";
import { useRouter } from "next/navigation";

export default function Header({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const handleLogout = () => {
    //handle logout in the future
  };

  const router = useRouter();

  return (
    <div
      className={cn("h-fit p-6 bg-gradient-to-b from-background", className)}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        {/* desktop navigation */}
        <div className="hidden md:flex gap-x-2 items-center">
          <button className="rounded-full bg-secondary p-1 flex shadow-lg items-center justify-center hover:opacity-75 transition">
            <Icons.chevronLeft size={30} className="text-white/60" />
          </button>
          <button className="rounded-full bg-secondary p-1 flex shadow-lg items-center justify-center hover:opacity-75 transition">
            <Icons.chevronRight size={30} className="text-white/60" />
          </button>
        </div>
        {/* mobile navigation */}
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-secondary flex items-center justify-center hover:opacity-75 transition shadow-lg">
            <Icons.home size={26} className="text-foreground/60" />
          </button>
          <button className="rounded-full p-2 bg-secondary flex items-center justify-center hover:opacity-75 transition shadow-lg">
            <Icons.search size={26} className="text-foreground/60" />
          </button>
        </div>
        <div className="flex justify-center items-center gap-x-4">
          <ThemeDropDown />
          <RegisterModal />
          <AuthModal />
        </div>
      </div>
      {children}
    </div>
  );
}
