"use client";
import { useState, useRef } from "react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/design-system";
import DashboardCard from "../../shared/dashboard-card/dashboard-card";
import { FormBeatValues } from "../../types";
import FormDataBeat from "./form-data-beat/form-data-beat";
import FormProvider from "./context/form-provider";
import useFormUpload from "./hook/useFormUpload";
import ActiveStepFormComponent from "./active-step-component";

const defaultValues: Partial<FormBeatValues> = {
  beatname: "",
  genre: "",
};

export default function FormUploadModal({}: {}) {
  function onSubmit(data: FormBeatValues) {
    const dataBeat = {
      beatname: data.beatname,
    };
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <DashboardCard alt="image" imageUrl=" " title="Subir beat" />
        </div>
      </DialogTrigger>
      <DialogContent className="w-[95%] md:w-full py-12  flex flex-col  rounded-lg ">
        <DialogHeader>
          <DialogTitle>Sube tu beat</DialogTitle>
        </DialogHeader>
        <div className=" px-4 py-1 flex flex-row gap-x-4 justify-between bg-secondary rounded-lg text-sm">
          <div>Informacion</div>
          <div>Precios</div>
          <div>Archivos</div>
          <div>Publicar</div>
        </div>
        <FormProvider>
          <ActiveStepFormComponent />
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
