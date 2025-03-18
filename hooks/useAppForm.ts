import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, FieldValues, useForm, Resolver } from "react-hook-form";
import { ZodType, ZodTypeDef } from "zod";

export type FormMode = "onChange" | "onSubmit" | "onTouched" | "onBlur";

export interface UseAppForm<T extends FieldValues> {
  schema: ZodType<T, ZodTypeDef, T>;
  mode?: FormMode;
  defaultValues?: DefaultValues<T>;
}

export const useAppForm = <T extends FieldValues>({
  schema,
  mode = "onSubmit",
  defaultValues,
}: UseAppForm<T>) => {
  const form = useForm<T>({
    defaultValues,
    resolver: zodResolver(schema) as unknown as Resolver<T, unknown>,
    mode,
  });
  return form;
};
