"use client";
import { ThemeDropDown, Title, UserDropDown } from "@/design-system";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Desktopnavbar({ user }: { user: User | null }) {
  console.log("user in desktopnavbar", user);

  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  });
  return (
    <>
      {/* header desktop */}
      <>
        <div className="flex flex-row justify-between w-full">
          <div>
            <Title as="h2" size={"sectionTitle"} className="text-foreground">
              Dashboard BeatMaker
            </Title>
            <p className="text-muted-foreground">
              Maneja los ajustes de tu cuenta y tus preferencias.
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <UserDropDown />
            <ThemeDropDown />
          </div>
        </div>
      </>
    </>
  );
}
