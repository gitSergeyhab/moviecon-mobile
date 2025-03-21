import { cutString } from "@/lib/utils/string";
import { Button } from "@/shared/components/Button/Button";
import { PrimaryTextBlock } from "@/shared/texts/PrimaryTextBlock";
import { FC } from "react";
import { View } from "react-native";

export interface CheckButtonProps {
  onButtonPress: VoidFunction;
  hasImage: boolean;
  primary: string | number | null | undefined;
  secondary: string | number | null | undefined;
  enName: string | number | null | undefined;
}
export const CheckButton: FC<CheckButtonProps> = ({
  onButtonPress,
  hasImage,
  enName,
  primary,
  secondary,
}) => {
  return (
    <View style={{ width: "100%" }}>
      <Button variant="secondary" size="small" onPress={onButtonPress}>
        {hasImage ? (
          cutString(primary as string, 32)
        ) : (
          <PrimaryTextBlock
            text={primary}
            enText={enName}
            secondary={secondary}
          />
        )}
      </Button>
    </View>
  );
};
