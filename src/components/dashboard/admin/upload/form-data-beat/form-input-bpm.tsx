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
import { FormBeatValues } from "../../types/form-beat-data";

export default function FormInputBpm({
  form,
}: {
  form: UseFormReturn<FormBeatValues>;
}) {
  return (
    <FormField
      control={form.control}
      name="bpm"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Bpm</FormLabel>
          <FormControl>
            <Input
              placeholder="Escribe el bpm de tu beat"
              {...field}
              type="number"
            />
          </FormControl>
          <FormDescription>
            Escribe el tempo en el que hiciste tu beat
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
