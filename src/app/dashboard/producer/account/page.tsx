import { ProducerPage } from "@/components/dashboard";
import HeaderDashboard from "@/components/dashboard/layout/header/header-dashboard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <HeaderDashboard user={user} />
      <ProducerPage user={user} producer_id="1" />
    </>
  );
}
