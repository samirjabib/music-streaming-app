import isValidFileType from "@/utils/validate-file";
import * as z from "zod";
import { archiveCompressorExtensions } from "../utils/constants";

export const formDataBeat = z.object({
  beatname: z
    .string()
    .min(2, {
      message: "Tu nombre debe contener al menos 2 caracteres.",
    })
    .max(30, {
      message: "Tu nombre debe contener maximo 30 caracteres",
    }),
  genre: z.string(),
  bpm: z.string().min(2).max(10),
  key: z.object({
    key: z.string(),
    type: z.string(),
  }),
});

export const formFileBeat = z.object({
  fileMp3: z.custom<File>(), // TODO: ask julian to this type
  fileWav: z.custom<File>(),
  fileZip: z.custom<File>(),
});
