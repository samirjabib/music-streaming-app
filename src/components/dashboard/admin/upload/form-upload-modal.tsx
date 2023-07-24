"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/design-system";

import DashboardCard from "../../shared/dashboard-card/dashboard-card";

import FormUpload from "./form-upload";
import FormProvider from "./context/form-provider";

export default function FormUploadModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <DashboardCard alt="image" imageUrl=" " title="Subir beat" />
        </div>
      </DialogTrigger>
      <DialogContent
        className="w-[95%] h-[45rem] md:w-full py-12  flex flex-col  rounded-lg top-1/2 "
        position="top"
      >
        <DialogHeader className="mb-4">
          <DialogTitle>Sube tu beat</DialogTitle>
        </DialogHeader>
        <FormProvider>
          <FormUpload />
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
