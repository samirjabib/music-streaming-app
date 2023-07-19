import { Card, CardContent, Separator, Title } from "@/design-system";
import { Header } from "../layout";
import HomeHero from "./home-hero";

export default function HomePage() {
  return (
    <main className="w-full h-full overflow-hiden overflow-y-auto rounded-lg px-2">
      <Header />
      <Separator className="mb-3" />
      <HomeHero />
    </main>
  );
}
