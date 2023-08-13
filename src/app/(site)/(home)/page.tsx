import { cookies } from "next/headers";

import HomePage from "@/components/home/home-page";
import { Card, CardContent } from "@/design-system";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/db/types/supabase";

export default async function Home() {
  //get with the server function supabase
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: beats, error } = await supabase.from("beats").select("*");

  if (error) {
    return { error };
  }

  return (
    <>
      <Card className="h-full ">
        <CardContent className="h-full">
          <HomePage beats={beats} />
        </CardContent>
      </Card>
    </>
  );
}
