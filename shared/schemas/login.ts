import { z } from "zod";
import { emailField, passwordField } from "./common";

export const LoginSchema = z.object({
  email: emailField,
  password: passwordField,
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
