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

import { RegisterUserValues, registerUserSchema } from "./validators/register";
import RegisterProducerForm from "./register-producer-form";
import RegisterArtistForm from "./register-artist-form";

export default function RegisterModal() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const supabase = createClientComponentClient();

  const form = useForm<RegisterUserValues>({
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterUserValues) => {
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
            <TabsTrigger value="account">Artista</TabsTrigger>
            <TabsTrigger value="password">Beatmaker</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card className="border-none">
              <CardHeader>
                <CardTitle>
                  Registrate como <span className="text-primary">artista</span>
                </CardTitle>
                <CardDescription>
                  Crea tu cuenta y accede a las funcionalidades de la plataforma
                  para ayudarte en tu proceso creativo.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <RegisterArtistForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card className="border-none">
              <CardHeader>
                <CardTitle>
                  Registrate como{" "}
                  <span className="text-primary">beatmaker</span>
                </CardTitle>
                <CardDescription>
                  Registrate como beatmaker y accede a funcionalidades para
                  ayudarte a gestionar tus productos digitales.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <RegisterProducerForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
