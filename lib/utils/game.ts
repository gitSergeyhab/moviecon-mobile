import { TestType, Variant } from "@/type/game";
import { BlockField, BlockType } from "../configs/game/config";

export const getContent = (
  settingsDict: Record<TestType, BlockField>,
  testType: TestType,
  block: keyof BlockField,
  variant: Variant
): string | number | null | undefined => {
  const blockFields = settingsDict[testType];
  const field = blockFields[block];
  if (!field) return null;
  return variant[field];
};

export const getContents = (
  settingsDict: Record<TestType, BlockField>,
  testType: TestType,
  variant: Variant
) => {
  const [primary, secondary, image, enName] = (
    ["primary", "secondary", "image", "enName"] as BlockType[]
  ).map((item) => getContent(settingsDict, testType, item, variant));
  return { primary, secondary, image, enName };
};
