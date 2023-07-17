import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Title,
} from "@/design-system";

export default function AccountInfo() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Informacion cuenta
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Title as="h2" size={"sectionTitle"}>
          Samir Jabib
        </Title>
        <Title
          as="h4"
          size={"sectionSubtitle"}
          className="text-muted-foreground"
        >
          Beatmaker
        </Title>
        <div>
          <Title as="h3" size={"textTitle"}>
            Estadisticas
          </Title>
          <ul>
            <li>
              <h4></h4>
              <p></p>
            </li>
            <li>
              <h4></h4>
              <p></p>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
