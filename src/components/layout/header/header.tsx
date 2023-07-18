import { AuthModal, RegisterModal } from "@/components/auth";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Icons,
  ThemeDropDown,
  Title,
  UserDropDown,
} from "@/design-system";
import { cn } from "@/lib";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Header({ className }: { className?: string }) {
  // is server side, I don't like it too much but seems faster
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);
  return (
    <div className={cn("h-fit py-3 ", className)}>
      <div className="w-full flex items-center justify-between">
        <Title as="h1" size={"sectionTitle"}>
          Fire<span className="text-orange-500">beats</span>
        </Title>
        <div className="flex justify-center items-center gap-x-4">
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
      </div>
    </div>
  );
}
