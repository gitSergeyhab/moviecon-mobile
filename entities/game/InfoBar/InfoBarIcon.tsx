import { FC } from "react";
import { IconSymbol } from "@/shared/components/ui/IconSymbol";

export interface InfoBarIcon {
  count: number;
  isActive?: boolean;
  type: "star" | "skip";
}
export const InfoBarIcons: FC<InfoBarIcon> = ({ count, isActive, type }) => {
  const color = isActive ? "orange" : "gray";
  return Array(count)
    .fill(null)
    .map((_, i) =>
      type === "star" ? (
        <IconSymbol name="favorite" size={16} color={color} key={i} />
      ) : (
        <IconSymbol name="skip-next" size={16} color={color} key={i} />
      )
    );
};
