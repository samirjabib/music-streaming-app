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

export default function FormCovertArtInput({
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
        name="coverArt"
        render={({ field }) => (
          <FormItem className="">
            <FormLabel htmlFor="covert-art">Subir Cover art</FormLabel>
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
            <FormDescription>Sube tu cover art</FormDescription>
          </FormItem>
        )}
      />
    </div>
  );
}
