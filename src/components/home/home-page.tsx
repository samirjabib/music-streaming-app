import { Card, CardContent, Separator, Title } from "@/design-system";
import { Header } from "../layout";
import HomeHero from "./home-hero";
import { Beat } from "@/lib/db/types/collections";

export default function HomePage({ beats }: { beats: Beat[] }) {
  return (
    <main className="w-full wrapper wrapper-mobile">
      <Header />
      <Separator className="mb-3" />
      <HomeHero beats={beats} />
    </main>
  );
}
