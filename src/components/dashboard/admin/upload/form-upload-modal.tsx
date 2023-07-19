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
      <DialogContent
        position="top"
        className="w-[95%] md:w-full py-12  flex flex-col justify-center items-center "
      >
        <Tabs
          defaultValue="account"
          className="w-[400px]  flex flex-col items-center min-h-[400px]"
        >
          <TabsList className="">
            <TabsTrigger value="subir-beat">Subir BEAT</TabsTrigger>
            <TabsTrigger value="precios">Precios</TabsTrigger>
            <TabsTrigger value="image">Imagen</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>

          <TabsContent value="subir-beat" className="">
            <FormDataBeat />
          </TabsContent>
          <TabsContent value="precios">Imagen</TabsContent>
          <TabsContent value="Publicar">Change your password here.</TabsContent>
        </Tabs>
        <DialogFooter className="flex flex-col gap-2 sm:gap-0"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
