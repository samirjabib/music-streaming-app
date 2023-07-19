import { UseFormReturn } from "react-hook-form";

import FormInputName from "./form-input-name";
import { FormBeatValues } from "@/components/dashboard/types";
import FormInputGenre from "./form-input-genre";
import FormInputBpm from "./form-input-bpm";
import FormInputKey from "./form-input-key";

export default function FormDataBeat({
  form,
}: {
  form: UseFormReturn<FormBeatValues>;
}) {
  return (
    <div className="flex flex-col gap-y-8">
      <FormInputName form={form} />
      <FormInputGenre form={form} />
      <FormInputBpm form={form} />
      <FormInputKey form={form} />
    </div>
  );
}
