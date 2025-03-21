import React, { forwardRef, useContext, useState } from "react";
import { View, Text } from "react-native";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { Option } from "@/type/option";
import { style } from "./styles";
import { indent } from "@/lib/configs/ui/sizes";

export interface ModalSelectProps<T extends number | string> {
  value: T;
  onChange: (value: T) => void;
  options: Option<T>[];
  label?: string;
  modalWidth?: number;
  placeholder?: string;
}

export const ModalSelect = forwardRef<View, ModalSelectProps<number | string>>(
  ({ onChange, options, value, label, modalWidth, placeholder }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const { theme } = useContext(ThemeContext);

    const handleSelect = (item: number | string) => {
      onChange(item);
      setIsVisible(false);
    };

    const selectedLabel = options.find((option) => option.value === value);

    return (
      <View style={style.container} ref={ref}>
        <Text
          style={{
            color: colorTheme[theme].text.primary,
            padding: indent.x1,
          }}
        >
          {label}
        </Text>
        <Button variant="secondary" onPress={() => setIsVisible(true)}>
          <Text>{selectedLabel?.label || placeholder}</Text>
        </Button>
        <Modal isVisible={isVisible} hideModal={() => setIsVisible(false)}>
          <View
            style={{
              ...style.select,
              backgroundColor: colorTheme[theme].background.secondary,
              width: modalWidth || "100%",
            }}
          >
            {options.map((item) => (
              <Button
                key={item.value}
                onPress={() => handleSelect(item.value)}
                variant={item.value === value ? "secondary" : "primary"}
              >
                {item.label}
              </Button>
            ))}
          </View>
        </Modal>
      </View>
    );
  }
);

ModalSelect.displayName = "ModalSelect";
