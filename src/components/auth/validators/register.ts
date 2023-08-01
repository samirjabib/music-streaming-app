import * as z from "zod";

//register schema model
export const registerBeatmakerSchema = z.object({
  email: z.string().email({
    message: "Ingresa un email válido por favor",
  }),
  password: z
    .string()
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "La contraseña debe tener minmo 8 caracteres y al menos: una mayuscula, una minúscula, un numero y un caracter especial",
    }),
});

export type RegisterBeatmakerSchemaValues = z.infer<
  typeof registerBeatmakerSchema
>;
