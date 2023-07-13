import { Title } from "@/design-system";
import { Header } from "../layout";
import HomeListItem from "./home-list-item";

export default function HomePage() {
  return (
    <main className="bg-secondary h-full w-full overflow-hiden overflow-y-auto rounded-lg">
      <Header>
        <div className="mb-2">
          <Title as="h1" size={"sectionTitle"}>
            Welcome Back
          </Title>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4">
            <HomeListItem
              image="/images/home/liked.png"
              name="Liked"
              href="liked"
            />
          </div>
        </div>
      </Header>
    </main>
  );
}
