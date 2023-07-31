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
import { FormBeatValues } from "../../types/form-validators-types";

export default function FormInputKey({
  form,
}: {
  form: UseFormReturn<FormBeatValues>;
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
                  control: (baseStyles, state) => ({
                    ...baseStyles,
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
              Describe tu tipo de cuerpo de manera corta
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
            <FormLabel>Elige la nota</FormLabel>
            <FormControl>
              <Select
                instanceId="key_type"
                id="key_type"
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
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
              Describe tu tipo de cuerpo de manera corta
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
