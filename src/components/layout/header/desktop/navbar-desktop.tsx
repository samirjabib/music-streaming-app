import { AuthModal, RegisterModal } from "@/components/auth";
import { ThemeDropDown, UserDropDown } from "@/design-system";
import { User } from "@supabase/supabase-js";

export default function NavbarDesktop({ user }: { user: User | null }) {
  return (
    <div className="hidden justify-center items-center gap-x-4 md:flex">
      <ThemeDropDown />
      {user ? (
        <>
          <UserDropDown />
        </>
      ) : (
        <>
          <RegisterModal />
          <AuthModal />
        </>
      )}
    </div>
  );
}
