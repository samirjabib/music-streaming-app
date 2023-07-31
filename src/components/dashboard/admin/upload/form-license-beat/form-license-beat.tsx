import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formLicensesBeat} from "@/components/dashboard/validators";
import { FormLicenseValues } from "../../types/form-validators-types";

import useFormUpload from "../hook/useFormUpload";

import { Button, Form } from "@/design-system";
import FormInputLicenses from "./form-input-licenses";

export default function FormLicenseBeat() {
  const { formData, onHandleBack, onHandleNext, setFormData, step } =
    useFormUpload();

  const form = useForm<FormLicenseValues>({
    resolver: zodResolver(formLicensesBeat),
    defaultValues: {
      basic: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    console.log(data);
    onHandleNext();
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormInputLicenses form={form} />
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
