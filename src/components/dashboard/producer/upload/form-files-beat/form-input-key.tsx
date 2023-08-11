import { UseFormReturn } from "react-hook-form";
import Select from "react-select";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/design-system";

import { notes, notes_type } from "../utils/constants";
import { FormFilesValues } from "../../types";

export default function FormInputKey({
  form,
}: {
  form: UseFormReturn<FormFilesValues>;
}) {
  return (
    <>
      <FormField
        control={form.control}
        name="key.key"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Elige la nota</FormLabel>
            <FormControl>
              <Select
                instanceId="key"
                id="key"
                styles={{
                  control: (baseStyles, { menuIsOpen }) => ({
                    ...baseStyles,
                    boxShadow: 'none',
                    '&:hover': {
                      borderColor: menuIsOpen ? '#ea580c' : '',
                    },
                    borderColor: menuIsOpen ? '#ea580c' : '',
                  }),
                }}
                className="select-component-container"
                classNamePrefix="select-component"
                options={notes}
                onChange={(selectedOption) => {
                  const value = selectedOption ? selectedOption.value : "";
                  field.onChange(value);
                }}
                value={notes.find((c) => c.value === field.value)}
              />
            </FormControl>
            <FormDescription>
              Escibe la nota en que hiciste tu beat para poder facilitar la
              grabacion
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="key.type"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tonalidad</FormLabel>
            <FormControl>
              <Select
                instanceId="key_type"
                id="key_type"
                styles={{
                  control: (baseStyles, { menuIsOpen }) => ({
                    ...baseStyles,
                    boxShadow: 'none',
                    '&:hover': {
                      borderColor: menuIsOpen ? '#ea580c' : '',
                    },
                    borderColor: menuIsOpen ? '#ea580c' : '',
                  }),
                }}
                className="select-component-container"
                classNamePrefix="select-component"
                options={notes_type}
                onChange={(selectedOption) => {
                  const value = selectedOption ? selectedOption.value : "";
                  field.onChange(value);
                }}
                value={notes_type.find((c) => c.value === field.value)}
              />
            </FormControl>
            <FormDescription>
              Si tu tonalidad es mayor o menor en la escala
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
