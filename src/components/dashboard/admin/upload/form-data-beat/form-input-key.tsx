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
import { FormBeatValues } from "@/components/dashboard/types";

export default function FormInputKey({
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
          <FormLabel>Tonalidad</FormLabel>
          <FormControl>
            <Input placeholder="Escoge un nombre para tu beat" {...field} />
          </FormControl>
          <FormDescription>
            Agrega la escala musical en la que construiste tu beat
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
