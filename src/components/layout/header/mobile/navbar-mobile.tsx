"use client";

import { AuthModal, RegisterModal } from "@/components/auth";
import { Button } from "@/design-system";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavbarMobile({ user }: { user: User | null }) {
  const router = useRouter();

  const supabase = createClientComponentClient();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <div className="">
      {user ? (
        <>
          <ul className="flex items-end flex-col gap-y-4">
            <li className="text-foreground/80">
              <Link href="/">Dashboard</Link>
            </li>
            <li className="text-foreground/80">
              <Link href="/">Buscar</Link>
            </li>
            <li className="text-foreground/80">
              <Button variant={"secondary"}>Logout</Button>
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul className="flex items-end flex-col gap-y-4">
            <li className="text-foreground/80">
              <Link href="/">Buscar</Link>
            </li>
            <li className="text-foreground/80">
              <RegisterModal />
            </li>
            <li className="text-foreground/80">
              <AuthModal />
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
