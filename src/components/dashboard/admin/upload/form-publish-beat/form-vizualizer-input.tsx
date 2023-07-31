import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from "@/design-system";
import { FormPublishValues } from "../../types";

export default function FormVizualizerInput({
  form,
  handleFileChange,
}: {
  form: UseFormReturn<FormPublishValues>;
  handleFileChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => File | undefined;
}) {
  return (
    <div className="grid w-full  items-center gap-1.5 ">
      <FormField
        control={form.control}
        name="vizualizer"
        render={({ field }) => (
          <FormItem className="">
            <FormLabel htmlFor="vizualizer">Subir Cover art</FormLabel>
            <FormControl>
              <Input
                id="vizualizer"
                type="file"
                className=" py-2"
                onChange={(event) => {
                  const file = handleFileChange(event);
                  console.log(file, " this is the file on change");
                  field.onChange(file);
                }}
                accept="video/mp4, video/webm, video/quicktime"
              />
            </FormControl>
            <FormDescription>Sube tu vizualizer</FormDescription>
          </FormItem>
        )}
      />
    </div>
  );
}
