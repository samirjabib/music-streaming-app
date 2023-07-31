import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/design-system";

import { UseFormReturn } from "react-hook-form";
import { Button } from "@/design-system";
import { FormLicenseValues } from "../../types";

export default function FormInputProLicense({
  form,
}: {
  form: UseFormReturn<FormLicenseValues>;
}) {
  return (
    <FormField
      control={form.control}
      name="pro"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Tipo de cuerpo</FormLabel>
          <FormControl>
            <p>$</p>
            <Input
              placeholder="Escribe el precio en dolares"
              type="number"
              {...field}
            />
          </FormControl>
          <FormDescription>
            <Button variant={"link"}>Ver contrato</Button>
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
