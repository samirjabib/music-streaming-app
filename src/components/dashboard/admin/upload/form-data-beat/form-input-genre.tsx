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
import { genreAvalaible } from "../utils/constants";

export default function FormInputGenre({
  form,
}: {
  form: UseFormReturn<FormBeatValues>;
}) {
  return (
    <FormField
      control={form.control}
      name="genre"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Genero musical</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccionar genero" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {genreAvalaible.map((genre) => (
                    <SelectItem value={genre.value} key={genre.id}>
                      {genre.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription>
            Escoge uno de nuestros generos disponibles
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
