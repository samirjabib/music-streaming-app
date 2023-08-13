import { Card, CardContent, Separator, Title } from "@/design-system";
import { Header } from "../layout";
import HomeHero from "./home-hero";
import { Beat } from "@/lib/db/types/collections";

export default function HomePage({ beats }: { beats: Beat[] }) {
  return (
    <main className="w-full h-full overflow-hiden overflow-y-auto rounded-lg px-4">
      <Header />
      <Separator className="mb-3" />
      <HomeHero beats={beats} />
    </main>
  );
}
