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

export default function FormInputLicenses({
  form,
}: {
  form: UseFormReturn<FormLicenseValues>;
}) {
  return (
    <>
      <FormField
        control={form.control}
        name="basic"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Licencia basica</FormLabel>
            <FormControl>
              <Input
                placeholder="Escribe el precio en dolares"
                type="number"
                {...field}
              />
            </FormControl>
            <FormDescription className="flex justify-end">
              <Button variant={"link"} className="text-foreground/60">
                Ver contrato
              </Button>
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="pro"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Licencia pro</FormLabel>
            <FormControl>
              <Input
                placeholder="Escribe el precio en dolares"
                type="number"
                {...field}
              />
            </FormControl>
            <FormDescription className="flex justify-end">
              <Button variant={"link"} className="text-foreground/60">
                Ver contrato
              </Button>
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* <FormField
        control={form.control}
        name="premium"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Licencia premium</FormLabel>
            <FormControl>
              <Input
                placeholder="Escribe el precio en dolares"
                type="number"
                {...field}
              />
            </FormControl>
            <FormDescription className="flex justify-end">
              <Button variant={"link"} className="text-foreground/60">
                Ver contrato
              </Button>
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="exclusive"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Licencia Exclusiva</FormLabel>
            <FormControl>
              <Input
                placeholder="Escribe el precio en dolares"
                type="number"
                {...field}
              />
            </FormControl>
            <FormDescription className="flex justify-end">
              <Button variant={"link"} className="text-foreground/60">
                Ver contrato
              </Button>
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      /> */}
    </>
  );
}
