import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import FormInputName from "./form-input-name";
import { FormBeatValues } from "@/components/dashboard/types";
import FormInputGenre from "./form-input-genre";
import FormInputBpm from "./form-input-bpm";
import FormInputKey from "./form-input-key";
import { Button, Form } from "@/design-system";
import { formDataBeat } from "@/components/dashboard/validators";
import useFormUpload from "../hook/useFormUpload";

export default function FormDataBeat() {
  const { formData, onHandleBack, onHandleNext, setFormData, step } =
    useFormUpload();

  const form = useForm<FormBeatValues>({
    resolver: zodResolver(formDataBeat),
    // defaultValues,
    mode: "onChange",
  });

  const onSubmit = (data: FormBeatValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormInputName form={form} />
        <FormInputGenre form={form} />
        <FormInputBpm form={form} />
        <FormInputKey form={form} />

        <div className="flex flex-row justify-end  w-full gap-2 ">
          <Button variant={"ghost"}>Cancelar</Button>
          <Button type="submit">Ir a precios</Button>
        </div>
      </form>
    </Form>
  );
}
