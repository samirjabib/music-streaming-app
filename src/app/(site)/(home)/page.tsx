import HomePage from "@/components/home/home-page";
import { Card, CardContent } from "@/design-system";

export default function Home() {
  return (
    <>
      <Card className="h-full">
        <CardContent className="h-full">
          <HomePage />
        </CardContent>
      </Card>
    </>
  );
}
