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
import FormProvider from "./context/form-provider";
import useFormUpload from "./hook/useFormUpload";
import ActiveStepFormComponent from "./active-step-component";
import { FormBeatValues } from "../types/form-beat-data";
import { menuItems } from "./utils/constants";
import { cn } from "@/lib";

const defaultValues: Partial<FormBeatValues> = {
  beatname: "",
  genre: "",
};

export default function FormUploadModal() {
  const { step } = useFormUpload();

  console.log(step);

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
        <div className="  py-1 px-1 flex flex-row  justify-between bg-secondary rounded-lg text-sm">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                "py-1 px-2 transition-all ",
                step === item.id
                  ? "bg-primary/20  rounded-lg text-foreground"
                  : "text-foreground/80"
              )}
            >
              {item.label}
            </div>
          ))}
        </div>
        <FormProvider>
          <ActiveStepFormComponent step={step} />
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
