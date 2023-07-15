import * as z from "zod";

//login schema
export const authSchema = z.object({
  email: z.string().email({
    message: "Ingresa un email valido por favor",
  }),
  password: z
    .string()
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "La contraseña que creaste en el registro tiene al menos: una mayúscula, una minuscula, un numero y un caracter especial",
    }),
});

//register schema user
export const registerSchemaUser = z.object({
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

//register schema model
export const registerSchemaModel = z.object({
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

//verify email
export const verfifyEmailSchema = z.object({
  code: z
    .string()
    .min(6, {
      message: "Verification code must be 6 characters long",
    })
    .max(6),
});

//recovery password
export const recoveryPasswordSchema = z.object({
  email: z.string().email({
    message: "Ingresa un email válido por favor",
  }),
});

//update password
export const resetPasswordSchema = z
  .object({
    password: authSchema.shape.password,
    confirmPassword: authSchema.shape.password,
    code: verfifyEmailSchema.shape.code,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
