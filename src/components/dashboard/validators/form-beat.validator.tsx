import * as z from "zod";

export const formDataBeat = z.object({
  beatname: z
    .string()
    .min(2, {
      message: "Tu nombre debe contener al menos 2 caracteres.",
    })
    .max(30, {
      message: "Tu nombre debe contener maximo 30 caracteres",
    }),
  genre: z.string().min(2, { message: "Necesitas seleccionar un genero" }),
  bpm: z.string().min(2).max(10),
});

//TODO:fix this custom validate on zod
export const formFileBeat = z.object({
  fileMp3: z.custom<File>((v) => v instanceof File, {
    message: "Archivo en mp3 es requerido",
  }),
  key: z.object({
    key: z.string().min(1, {
      message: "Necesitas seleccionar un nota",
    }),
    type: z.string().min(1, {
      message: "necesitas seleccionar una tonalidad",
    }),
  }),
});

export const formPublishBeat = z.object({
  coverArt: z.custom<File>((v) => v instanceof File, {
    message: "Es necesario un cover art",
  }),

  tags: z.string().array().nonempty({
    message: "los tags no pueden estar vacios",
  }),
  basic: z.string().min(1, {
    message: "Debes pasar un valor para la licencia basica",
  }),
});
