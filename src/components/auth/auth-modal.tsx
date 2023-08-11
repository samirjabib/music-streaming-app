"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

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
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Icons,
  FormDescription,
} from "@/design-system";

import LoginProviders from "./login-providers";
import { useState } from "react";
import { LoginSchemaValues, loginSchema } from "./validators/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Database } from "@/lib/db/types/supabase";

export default function AuthModal() {
  const supabase = createClientComponentClient<Database>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/api/auth/callback",
      },
    });
  };

  const router = useRouter();

  const form = useForm<LoginSchemaValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchemaValues) => {
    setIsSubmitting(true);
    const res = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    console.log(res.data.user);

    if (res?.data.user) {
      console.log("run refresh");
      router.refresh();
    }
    setIsSubmitting(false);
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
              {/* <CardContent>
                implement this type of login later
                <LoginProviders loginWithGoogle={loginWithGoogle} />
              </CardContent> */}
              <Separator className="mb-4" />
              <CardContent className="space-y-2">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ingresa una direccion de correo electronico..."
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>Ingresa tu email</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Put a password..."
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Ingresa tu contraseña
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting && (
                        <Icons.spinner
                          className="mr-2 h-4 w-4 animate-spin"
                          aria-hidden="true"
                        />
                      )}
                      <>Submit</>
                    </Button>
                  </form>
                </Form>
              </CardContent>
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
