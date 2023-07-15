"use client";

import {
  Dialog,
  DialogContent,
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
  Separator,
} from "@/design-system";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { useRouter } from "next/navigation";
import LoginProviders from "./login-providers";

export default function AuthModal() {
  const router = useRouter();

  const supabase = createClientComponentClient();

  const loginWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (data.provider) {
      router.refresh();
    }
    console.log(error, " this is the error");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Log in</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col w-full items-center h-auto">
        <Tabs defaultValue="account" className="w-[400px] min-h-[450px] mt-10">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Log in</TabsTrigger>
            <TabsTrigger value="password">Recovery Account</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card className="border-none">
              <CardHeader className="flex flex-col w-full items-center">
                <CardTitle>Login</CardTitle>
                <CardDescription>Login with your account</CardDescription>
              </CardHeader>
              <CardContent>
                <LoginProviders loginWithGoogle={loginWithGoogle} />
              </CardContent>
              <Separator className="mb-4" />
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
