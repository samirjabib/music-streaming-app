import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  List,
  Separator,
  Title,
} from "@/design-system";
import Paragraph from "@/design-system/typografy/paragraph";

export default function AccountInfo() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Informacion cuenta
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Title as="h2" size={"sectionTitle"} className="text-foreground">
          Samir Jabib
        </Title>
        <Title
          as="h4"
          size={"sectionSubtitle"}
          className="text-muted-foreground"
        >
          Beatmaker
        </Title>
        <Separator className="my-4" />
        <div>
          <Title as="h3" size={"textTitle"}>
            Estadisticas
          </Title>
          <List className=" ml-0">
            <li className="flex flex-row justify-between">
              <span>Tracks</span> 15
            </li>
            <li className="flex flex-row justify-between">
              <span>Plays</span> 300
            </li>
            <li className="flex flex-row justify-between">
              <span>Followers</span> 700
            </li>
            <li className="flex flex-row justify-between">
              <span>Likes</span> 2530
            </li>
          </List>
        </div>
      </CardContent>
    </Card>
  );
}
