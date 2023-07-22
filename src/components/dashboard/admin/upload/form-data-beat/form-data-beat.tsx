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

  return (
    <form className="flex flex-col gap-y-8">
      <Form {...form}>
        <FormInputName form={form} />
        <FormInputGenre form={form} />
        <FormInputBpm form={form} />
        <FormInputKey form={form} />

        <div className="flex flex-row justify-end  w-full gap-2 ">
          <Button variant={"ghost"}>Cancelar</Button>
          <Button
            type="submit"
            // onClick={() => updateButtonRef?.current?.click()}
          >
            Subir Beat
          </Button>
        </div>
      </Form>
    </form>
  );
}
