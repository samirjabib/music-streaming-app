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
import { archiveCompressorExtensions } from "@/components/dashboard/utils/constants";

export default function FormUploadZip({
  form,
  handleFileChange,
}: {
  form: UseFormReturn<FormFilesValues>;
  handleFileChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => File | undefined;
}) {
  return (
    <div className="grid w-full  items-center gap-1.5">
      <FormField
        control={form.control}
        name="fileZip"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="stems">Subir Stems</FormLabel>
            <FormControl>
              <Input
                id="file"
                type="file"
                className=" py-2"
                onChange={(event) => {
                  const file = handleFileChange(event);
                  console.log(file, " this is the file on change");
                  field.onChange(file);
                }}
                accept={archiveCompressorExtensions
                  .map((ext) => (ext === ".7z" ? ".7zip" : ext))
                  .join(", ")}
              />
            </FormControl>
            <FormDescription>Sube tu beat en formato stems</FormDescription>
          </FormItem>
        )}
      />
    </div>
  );
}
