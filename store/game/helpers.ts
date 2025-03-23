import { randomSort } from "@/lib/utils/sort";
import { Variant } from "@/type/game";

export const getUniqueVariants = (variants: Variant[]): Variant[] => {
  const hashId: Record<string, boolean> = {};
  return variants.filter((variant) => {
    if (hashId[variant.id!.toString()]) return false;
    hashId[variant.id!.toString()] = true;
    return true;
  });
};

export const getResultVariants = (variants: Variant[]): Variant[] => {
  const filtered = getUniqueVariants(variants);
  randomSort(filtered);
  return filtered;
};
