import { AuthModal, RegisterModal } from "@/components/auth";
import {
  Button,
  Icons,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  ThemeDropDown,
  Title,
  UserDropDown,
} from "@/design-system";
import { cn } from "@/lib";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import NavbarMobile from "./mobile/navbar-mobile";
import NavbarDesktop from "./desktop/navbar-desktop";

export default async function Header({ className }: { className?: string }) {
  // is server side, I don't like it too much but seems faster
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className={cn("h-fit py-4  ", className)}>
      <div className="w-full flex items-center justify-between">
        <Title as="h1" size={"sectionTitle"} className="text-2xl ">
          Fire<span className="text-orange-500">beats</span>
        </Title>
        <div></div>
        <div className="md:hidden">
          <Sheet>
            <div className="flex flex-row items-center gap-x-2">
              <div className="text-foreground/80">
                <ThemeDropDown />
              </div>
              <SheetTrigger className="bg-none">
                <Icons.menu size={32} />
              </SheetTrigger>
            </div>
            <SheetContent>
              <Separator className="my-6" />
              <SheetHeader>
                <NavbarMobile user={user} />
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <NavbarDesktop user={user} />
      </div>
    </div>
  );
}
