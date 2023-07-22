import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/design-system";
import { FormBeatValues } from "@/components/dashboard/types";

export default function FormInputGenre({
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
          <FormLabel>Genero musical</FormLabel>
          <FormControl>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccionar genero" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Trap</SelectItem>
                  <SelectItem value="banana">Reggeaton</SelectItem>
                  <SelectItem value="blueberry">Techno</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* <Input placeholder="Escoge un nombre para tu beat" {...field} /> */}
          </FormControl>
          <FormDescription>
            Escoge uno de nuestros generos disponibles{" "}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
