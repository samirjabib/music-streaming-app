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
}: {
  form: UseFormReturn<FormFilesValues>;
}) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && isArchiveFile(file.name)) {
      console.log(isArchiveFile(file.name));
      return file;
    } else {
      alert("Please select a valid archive file (e.g., .zip, .rar).");
    }
  };

  const isArchiveFile = (fileName: string) => {
    const lowerCaseFileName = fileName.toLowerCase();
    return archiveCompressorExtensions.some((ext) =>
      lowerCaseFileName.endsWith(ext)
    );
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
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
                className=""
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
