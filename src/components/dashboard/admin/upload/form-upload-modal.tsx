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

// This can come from your database or API.

const defaultValues: Partial<FormBeatValues> = {
  beatname: "",
  genre: "",
};

export default function FormUploadModal({}: {}) {
  const form = useForm<FormBeatValues>({
    resolver: zodResolver(formBeatSchema),
    defaultValues,
    mode: "onChange",
  });

  const updateButtonRef = useRef<HTMLButtonElement | null>(null); // ask julian to this type

  function onSubmit(data: FormBeatValues) {
    const dataBeat = {
      beatname: data.beatname,
    };

    console.log(dataBeat);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <DashboardCard alt="image" imageUrl=" " title="Subir beat" />
        </div>
      </DialogTrigger>
      <DialogContent className="w-[95%] md:w-full py-12  flex flex-col justify-center items-center rounded-lg ">
        <DialogHeader>
          <DialogTitle>Sube tu beat</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="account" className="w-full flex flex-col ">
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
            <Form {...form}>
              <form>
                <TabsContent value="subir-beat" className="w-full py-6">
                  <FormDataBeat form={form} />
                </TabsContent>
                <TabsContent value="precios" className="py-6">
                  Imagen
                </TabsContent>
                <TabsContent value="Publicar" className="py-6">
                  Change your password here.
                </TabsContent>

                {/* this button is use for ref submit with the others components outside of form */}
                <div className=" hidden ">
                  <Button
                    type="submit"
                    onSubmit={form.handleSubmit(onSubmit)}
                    ref={updateButtonRef}
                  >
                    Update profile
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </Tabs>
        <DialogFooter className="flex flex-row justify-end  w-full gap-2 ">
          <Button
            disabled
            variant={"ghost"}
            type="submit"
            onClick={() => updateButtonRef?.current?.click()}
          >
            Cancelar
          </Button>
          <Button>Subir Beat</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
