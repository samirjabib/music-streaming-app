import { cookies } from "next/headers";

import { ProducerPage } from "@/components/dashboard";
import HeaderDashboard from "@/components/dashboard/layout/header/header-dashboard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <HeaderDashboard />
      <ProducerPage user={user} producer_id="1" />
    </>
  );
}
