import { z } from "zod";
import { formConstants } from "./const";

export const emailField = z
  .string({ required_error: "Введите email" })
  .email({ message: "введите корректный email" });

export const passwordField = z
  .string({ required_error: "Введите пароль" })
  .min(formConstants.password.min, {
    message: `минимальная длина: ${formConstants.password.min}`,
  })
  .max(formConstants.password.max, {
    message: `максимальная длина: ${formConstants.password.max}`,
  });
