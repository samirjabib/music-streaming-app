import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/design-system";
import { FormBeatValues } from "../../types/form-validators-types";

export default function FormInputName({
  form,
}: {
  form: UseFormReturn<FormBeatValues>;
}) {
  return (
    <FormField
      control={form.control}
      name="beatname"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Nombre beat</FormLabel>
          <FormControl>
            <Input placeholder="Escoge un nombre para tu beat" {...field} />
          </FormControl>
          <FormDescription>Escribe el nombre de tu beat.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
