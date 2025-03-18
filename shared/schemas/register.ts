import { z } from "zod";
import { formConstants } from "./const";
import { emailField, passwordField } from "./common";

export const RegisterSchema = z
  .object({
    name: z
      .string({ required_error: "Введите имя" })
      .min(formConstants.name.min, {
        message: `минимальная длина: ${formConstants.name.min}`,
      })
      .max(formConstants.name.max, {
        message: `максимальная длина: ${formConstants.name.max}`,
      }),
    email: emailField,
    password: passwordField,
    repeatPassword: z.string({ required_error: "Повторите пароль" }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "пароли должны совпадать",
    path: ["repeatPassword"],
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
