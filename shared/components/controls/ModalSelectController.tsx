import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { SizeType } from "@/type/ui";
import { View } from "react-native";
import { FieldError } from "../FieldError";
import { ModalSelect } from "../Select/Select";
import { Option } from "@/type/option";

export interface InputControllerProps<T extends FieldValues> {
  control: Control<T>;
  size?: SizeType;
  name: Path<T>;
  modalWidth?: number;
  error?: string;
  options: Option[];
  label?: string;
  placeholder?: string;
}

export const ModalSelectController = <T extends FieldValues>({
  control,
  name,
  error,
  ...props
}: InputControllerProps<T>) => (
  <View>
    <Controller
      name={name}
      control={control}
      render={({ field }) => <ModalSelect {...field} {...props} />}
    />
    <FieldError error={error} />
  </View>
);
