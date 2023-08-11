"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
  Icons,
  Input,
  Button,
  FormDescription,
} from "@/design-system";

import { RegisterUserValues, registerUserSchema } from "./validators/register";

export default function RegisterProducerForm() {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Escoge un email"
                  type="email"
                  {...field}
                  autoComplete="off"
                />
              </FormControl>
              <FormDescription>
                Escoge un correo electronico para tu cuenta
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  type="password"
                  placeholder="Escoge una contraseña"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Crea una contraseña con la que podras acceder a tu cuenta
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
            Enviamos un correo de verificación, revisa la bandeja de spam en
            caso de que no lo veas.
          </p>
        )}
      </form>
    </Form>
  );
}
