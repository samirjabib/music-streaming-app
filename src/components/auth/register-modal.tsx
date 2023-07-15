import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Button,
  DialogTrigger,
  Input,
  Label,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/design-system";

export default function RegisterModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>Sign in</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col w-full items-center h-auto">
        <DialogHeader></DialogHeader>
        <Tabs defaultValue="account" className="w-[400px] min-h-[400px] mt-10">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Register</TabsTrigger>
            <TabsTrigger value="password">Recovery Account</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card className="border-none">
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Create your account here for access to funcionality
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Email</Label>
                  <Input id="email" placeholder="Put your email here" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">Password</Label>
                  <Input
                    id="new"
                    type="password"
                    placeholder="Put a password"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Submit</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card className="border-none">
              <CardHeader>
                <CardTitle>Recovery Account</CardTitle>
                <CardDescription>
                  Recovery your account here if you don't remember
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Email</Label>
                  <Input id="email" placeholder="Put your email here" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
