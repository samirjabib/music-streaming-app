import { Card, CardContent, Separator, Title } from "@/design-system";
import { Header } from "../layout";

export default function HomePage() {
  return (
    <main className="w-full h-full overflow-hiden overflow-y-auto rounded-lg px-2">
      <Header />
      <Separator className="mb-3" />
      <div className=" ">
        <div className="flex justify-between items-center">
          <Title as="h2" size={"sectionTitle"}>
            Nuevos Beats
          </Title>
        </div>
      </div>
    </main>
  );
}
