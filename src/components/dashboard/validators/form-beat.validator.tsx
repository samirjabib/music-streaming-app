import * as z from "zod";

export const formBeatSchema = z.object({
  beatname: z
    .string()
    .min(2, {
      message: "Tu nombre debe contener al menos 2 caracteres.",
    })
    .max(30, {
      message: "Tu nombre debe contener maximo 30 caracteres",
    }),
  genre: z.string(),
  
});
