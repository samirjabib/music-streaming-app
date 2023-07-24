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

export default function FormUploadMp3({
  form,
}: {
  form: UseFormReturn<FormFilesValues>;
}) {

  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name.toLowerCase().endsWith(".mp3")) {
      return file;
    } else {
      alert("Please select a valid .mp3 file.");
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <FormField
        control={form.control}
        name="fileMp3"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="mp3">Subir mp3</FormLabel>
            <FormControl>
              <Input
                id="mp3"
                type="file"
                className=""
                onChange={(event) => {
                  const file = handleFileChange(event);
                  console.log(file, " this is the file on change");
                  field.onChange(file);
                }}
                accept=".mp3"
              />
            </FormControl>
            <FormDescription>Sube tu beat en formato mp3</FormDescription>
          </FormItem>
        )}
      />
    </div>
  );
}
