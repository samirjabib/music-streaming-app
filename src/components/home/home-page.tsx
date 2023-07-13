import { ListItem, Title } from "@/design-system";
import { Header } from "../layout";

export default function HomePage() {
  return (
    <main className="bg-secondary h-full w-full overflow-hiden overflow-y-auto rounded-lg">
      <Header>
        <div className="mb-2">
          <Title as="h2" size={"sectionTitle"}>
            Welcome Back
          </Title>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4">
            <ListItem
              image="/images/home/liked.png"
              name="Liked"
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <Title as="h1">Newest Sounds</Title>
        </div>
        <div>List of songs!</div>
      </div>
    </main>
  );
}
