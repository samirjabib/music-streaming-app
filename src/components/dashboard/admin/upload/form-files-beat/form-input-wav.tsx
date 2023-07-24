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

export default function FormUplaodWav({
  form,
}: {
  form: UseFormReturn<FormFilesValues>;
}) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name.toLowerCase().endsWith(".wav")) {
      return file;
    } else {
      alert("Please select a valid .wav file.");
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
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
                className=""
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
