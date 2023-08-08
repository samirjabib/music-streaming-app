import { cookies } from "next/headers";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dasboard Layout",
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: DashboardLayoutProps) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user?.user_metadata.role, "im the user");

  //   if (user?.id && user?.user_metadata.role !== "model") {
  //     redirect("/");
  //   }

  return <>{children}</>;
}
