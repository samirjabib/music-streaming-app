"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import {
  Dialog,
  DialogContent,
  DialogHeader,
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
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
  FormDescription,
  Icons,
} from "@/design-system";

import {
  RegisterBeatmakerSchemaValues,
  registerBeatmakerSchema,
} from "./validators/register";

export default function RegisterModal() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  // const [isChecked, setIsChecked] = useState<boolean>(false);

  const supabase = createClientComponentClient();

  // const handleCheckbox = () => {
  //   setIsChecked(!isChecked);
  // };

  const form = useForm<RegisterBeatmakerSchemaValues>({
    resolver: zodResolver(registerBeatmakerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterBeatmakerSchemaValues) => {
    console.log(data);

    try {
      setIsSubmitting(true);
      const res = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: `${location.origin}/api/auth/callback`,
          data: {
            role: "producer",
          },
        },
      });
      setIsSubmitting(false);

      if (!res.error) {
        setIsSuccess(true);
      }
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
    }
  };

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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre beat</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Escoge un email"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Escribe el nombre de tu beat.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Escoge una contraseña</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Escoge un nombre para tu beat"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Escribe el nombre de tu beat.
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
                      <>Registrarse</>
                    </Button>

                    {isSuccess && (
                      <p className="mt-7">
                        Enviamos un correo de verificación, revisa la bandeja de
                        spam en caso de que no lo veas.
                      </p>
                    )}
                  </form>
                </Form>
              </CardContent>
              <CardFooter></CardFooter>
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
