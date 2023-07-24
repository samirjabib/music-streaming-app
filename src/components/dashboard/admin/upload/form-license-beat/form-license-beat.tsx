import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formFileBeat } from "@/components/dashboard/validators";
import { FormFilesValues } from "../../types/form-validators-types";

import useFormUpload from "../hook/useFormUpload";

import { Button, Form } from "@/design-system";

const defaultValues: FormFilesValues = {
  fileMp3: '',
  fileWav: '',
  fileZip: '',
};

export default function FormLicenseBeat() {
  const { formData, onHandleBack, onHandleNext, setFormData, step } =
    useFormUpload();

  console.log(formData);

  const form = useForm<FormFilesValues>({
    resolver: zodResolver(formFileBeat),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = (data: FormFilesValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    // onHandleNext();
    console.log(data);
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4 ">License Beat</div>

        <div className="flex flex-row justify-end  w-full gap-2 ">
          <Button variant={"ghost"} onClick={onHandleBack}>
            Atras
          </Button>
          <Button type="submit">Siguiente</Button>
        </div>
      </form>
    </Form>
  );
}
