import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formDataBeat } from "@/components/dashboard/validators";
import { FormBeatValues } from "../../types/form-beat-data";

import useFormUpload from "../hook/useFormUpload";

import FormUplaodWav from "./form-input-wav";
import FormUploadMp3 from "./form-input-mp3";
import FormUploadZip from "./form-input-zip";

import { Button, Form } from "@/design-system";

const defaultValues: FormBeatValues = {
  beatname: "",
  bpm: "",
  genre: "",
  key: {
    key: "",
    type: "",
  },
};

export default function FormFilesBeat() {
  const { formData, onHandleBack, onHandleNext, setFormData, step } =
    useFormUpload();

  console.log(step);

  const form = useForm<FormBeatValues>({
    resolver: zodResolver(formDataBeat),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = (data: FormBeatValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormUploadMp3 />
        <FormUplaodWav />
        <FormUploadZip />
        <div className="flex flex-row justify-end  w-full gap-2 ">
          <Button variant={"ghost"}>Cancelar</Button>
          <Button type="submit">Ir a precios</Button>
        </div>
      </form>
    </Form>
  );
}
