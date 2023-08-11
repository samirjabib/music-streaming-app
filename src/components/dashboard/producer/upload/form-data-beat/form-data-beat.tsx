import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import FormInputName from "./form-input-name";
import FormInputGenre from "./form-input-genre";
import FormInputBpm from "./form-input-bpm";
import FormInputKey from "../form-files-beat/form-input-key";
import { Button, Form } from "@/design-system";
import { formDataBeat } from "@/components/dashboard/validators";
import useFormUpload from "../hook/useFormUpload";
import {
  CombinedFormValues,
  FormBeatValues,
} from "../../types/form-validators-types";

export default function FormDataBeat() {
  const { onHandleNext, setFormData, formData, onHandleBack } = useFormUpload();

  const form = useForm<FormBeatValues>({
    resolver: zodResolver(formDataBeat),
    defaultValues: {
      beatname: formData.beatname,
      bpm: formData.bpm,
      genre: formData.genre,
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormBeatValues) => {
    setFormData((prev: CombinedFormValues) => ({ ...prev, ...data }));
    onHandleNext();
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

        <div className="flex flex-row justify-end  w-full gap-2 ">
          <Button type="submit">Siguiente</Button>
        </div>
      </form>
    </Form>
  );
}
