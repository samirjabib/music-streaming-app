import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/design-system";
import { FormBeatValues } from "@/components/dashboard/types";
import { notes } from "../utils/constants";

export default function FormInputKey({
  form,
}: {
  form: UseFormReturn<FormBeatValues>;
}) {
  return (
    <div className="flex flex-row gap-x-4">
      <FormField
        control={form.control}
        name="key.key"
        render={({ field }) => (
          <FormItem className="w-1/2">
            <FormLabel>Tonalidad</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tonalidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {notes.map((note, index) => (
                      <SelectItem value={note} key={index}>
                        {note}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormDescription>
              Escoge la tonalidad en la que hiciste tu ritmo
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="key.type"
        render={({ field }) => (
          <FormItem className="w-1/2">
            <FormLabel>Tipo</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tipo..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="mynor">Menor</SelectItem>
                    <SelectItem value="mayor">Mayor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormDescription>
              Ecoge entre mayor o menor la Tonalidad
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
