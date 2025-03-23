import { indent } from "@/lib/configs/ui/sizes";
import { RequestStatus } from "@/type/ui";
import { Dimensions } from "react-native";
import { AnswerStatus } from "./types";

export const getAnswerStatus = (
  variantId?: number | string | null,
  selectedId?: string | number | null,
  correctId?: string | number | null
): AnswerStatus => {
  if (correctId === null || correctId === undefined) {
    if (variantId === selectedId) {
      return "selectedNotChecked";
    }
    return "default";
  }
  if (variantId === correctId) {
    if (variantId === selectedId) {
      return "selectedRight";
    }
    return "notSelectedRight";
  }
  if (variantId === selectedId) {
    return "selectedWrong";
  }
  return "default";
};

export const getVariantWidth = (grid: "4*1" | "2*2") =>
  grid === "4*1" ? "100%" : Dimensions.get("screen").width / 2 - indent.x3;

export const getVariantOpacity = (
  selectedId: string | number | null,
  loadingStatus: RequestStatus,
  variantId?: string | number | null
) =>
  (selectedId || loadingStatus === "loading") && variantId !== selectedId
    ? 0.5
    : 1;
