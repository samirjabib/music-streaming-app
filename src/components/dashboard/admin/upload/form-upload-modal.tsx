"use client";
import { useState, useRef } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  Icons,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/design-system";
import DashboardCard from "../../shared/dashboard-card/dashboard-card";
import { FormBeatValues } from "../../types";
import { formBeatSchema } from "../../validators";
import FormDataBeat from "./form-data-beat/form-data-beat";

export default function FormUploadModal({}: {}) {
  const form = useForm<FormBeatValues>({
    resolver: zodResolver(formBeatSchema),
    // defaultValues,
    mode: "onChange",
  });

  // This can come from your database or API.
  const defaultValues: Partial<FormBeatValues> = {
    // socialMedia: [
    //   {
    //     value: 'https://sexsito.com',
    //   },
    //   {
    //     value: 'https://sexsito.com',
    //   },
    // ],
  };

  function onSubmit(data: any) {
    const dataBeat = {};

    console.log(dataBeat);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <DashboardCard alt="image" imageUrl=" " title="Subir beat" />
        </div>
      </DialogTrigger>
      <DialogContent className="w-[95%] md:w-full py-12  flex flex-col justify-center items-center ">
        <DialogHeader>
          <DialogTitle>Sube tu beat</DialogTitle>
        </DialogHeader>
        <Tabs
          defaultValue="account"
          className="w-full flex flex-col  min-h-[550px]"
        >
          <TabsList
            className="border-2 w-full "
            defaultValue={"subir-beat"}
            tabIndex={0}
          >
            <TabsTrigger value="subir-beat">Subir Beat</TabsTrigger>
            <TabsTrigger value="precios">Precios</TabsTrigger>
            <TabsTrigger value="image">Imagen</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <div className="">
            <TabsContent value="subir-beat" className="w-full py-6">
              <Form {...form}>
                <form>
                  <FormDataBeat form={form} />
                </form>
              </Form>
            </TabsContent>
            <TabsContent value="precios" className="py-6">
              Imagen
            </TabsContent>
            <TabsContent value="Publicar" className="py-6">
              Change your password here.
            </TabsContent>
          </div>
        </Tabs>
        <DialogFooter className="flex flex-row justify-end  w-full gap-2 ">
          <Button disabled variant={"ghost"}>
            Cancelar
          </Button>
          <Button disabled>Subir Beat</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
