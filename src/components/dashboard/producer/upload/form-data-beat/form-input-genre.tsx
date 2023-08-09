import { UseFormReturn } from "react-hook-form";
import Select from "react-select";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/design-system";
import { genreAvalaible } from "../utils/constants";
import { FormBeatValues } from "../../types/form-validators-types";

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
          <FormLabel>Elige el genero</FormLabel>
          <FormControl>
            <Select
              instanceId="genre_type"
              id="genre_type"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                }),
              }}
              className="select-component-container"
              classNamePrefix="select-component"
              options={genreAvalaible}
              onChange={(selectedOption) => {
                const value = selectedOption ? selectedOption.value : "";
                field.onChange(value);
              }}
              value={genreAvalaible.find((c) => c.value === field.value)}
            />
          </FormControl>
          <FormDescription>
            Escoge un genero entre los disponibles
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
