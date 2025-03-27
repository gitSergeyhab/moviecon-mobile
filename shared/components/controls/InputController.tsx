import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { ReactNode } from "react";
import { SizeType } from "@/type/ui";
import { View } from "react-native";
import { Input } from "../Input/Input";
import { FieldError } from "../FieldError";

export interface InputControllerProps<T extends FieldValues> {
  control: Control<T>;
  placeholder?: string;
  size?: SizeType;
  name: Path<T>;
  label?: ReactNode;
  disabled?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  error?: string;
  width?: string;
}

export const InputController = <T extends FieldValues>({
  control,
  name,
  error,
  ...props
}: InputControllerProps<T>) => (
  <View>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input {...field} {...props} onChangeText={field.onChange} />
        // <Input
        //   {...props}
        //   value={field.value} // Явно передаём value
        //   onChangeText={field.onChange}
        //   onBlur={field.onBlur} // Добавляем onBlur для react-hook-form
        // />
      )}
    />
    <FieldError error={error} />
  </View>
);
