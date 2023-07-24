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
  handleFileChange,
}: {
  form: UseFormReturn<FormFilesValues>;
  handleFileChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => File | undefined;
}) {
  return (
    <div className="grid w-full  items-center gap-1.5 ">
      <FormField
        control={form.control}
        name="fileMp3"
        render={({ field }) => (
          <FormItem className="">
            <FormLabel htmlFor="mp3">Subir mp3</FormLabel>
            <FormControl>
              <Input
                id="mp3"
                type="file"
                className=" py-2"
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
