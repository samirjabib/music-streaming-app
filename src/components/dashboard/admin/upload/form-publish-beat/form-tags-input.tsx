import { UseFormReturn } from "react-hook-form";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from "@/design-system";
import { FormPublishValues } from "../../types";

export default function FormTagInput({
  form,
}: {
  form: UseFormReturn<FormPublishValues>;
}) {
  return (
    <div className="grid w-full  items-center gap-1.5 ">
      <FormField
        control={form.control}
        name="tags"
        render={({ field }) => (
          <FormItem className="">
            <FormLabel htmlFor="vizualizer">Tags</FormLabel>
            <FormControl>
              <TagsInput
                value={field.value}
                onChange={(event) => field.onChange(event)}
                className="flex  w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </FormControl>
            <FormDescription>
              Presiona enter o añade una coma para poner un nuevo tag
            </FormDescription>
          </FormItem>
        )}
      />
    </div>
  );
}
