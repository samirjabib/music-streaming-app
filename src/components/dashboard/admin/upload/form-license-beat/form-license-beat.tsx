import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formFileBeat } from "@/components/dashboard/validators";
import { FormLicenseValues } from "../../types/form-validators-types";

import useFormUpload from "../hook/useFormUpload";

import { Button, Form } from "@/design-system";
import FormInputBasicLicense from "./form-input-basic";
import FormInputExclusiveLicense from "./form-input-exclusive";
import FormInputPremiumLicense from "./form-input-premium";
import FormInputProLicense from "./form-input-pro";

export default function FormLicenseBeat() {
  const { formData, onHandleBack, onHandleNext, setFormData, step } =
    useFormUpload();

  console.log(formData);

  const form = useForm<FormLicenseValues>({
    resolver: zodResolver(formFileBeat),
    defaultValues: {
      basic: "",
      exclusive: "",
      premium: "",
      pro: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormLicenseValues) => {
    // setFormData((prev: any) => ({ ...prev, ...data }));
    console.log(data);
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormInputBasicLicense form={form} />
        {/* <FormInputExclusiveLicense form={form} />
        <FormInputProLicense form={form} />
        <FormInputPremiumLicense form={form} /> */}
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
