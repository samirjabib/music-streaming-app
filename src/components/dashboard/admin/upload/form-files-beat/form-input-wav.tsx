import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from "@/design-system";
import { FormFilesValues } from "../../types";

export default function FormUploadWav({
  form,
  handleFileChange,
}: {
  form: UseFormReturn<FormFilesValues>;
  handleFileChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => File | undefined;
}) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <FormField
        control={form.control}
        name="fileWav"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="mp3">Subir wav</FormLabel>
            <FormControl>
              <Input
                id="wav"
                type="file"
                className=" py-2"
                onChange={(event) => {
                  const file = handleFileChange(event);
                  console.log(file, " this is the file on change");
                  field.onChange(file);
                }}
                accept=".wav"
              />
            </FormControl>
            <FormDescription>Sube tu beat en formato mp3</FormDescription>
          </FormItem>
        )}
      />
    </div>
  );
}
