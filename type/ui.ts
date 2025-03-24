export type RequestStatus = "idle" | "loading" | "success" | "failed";
export type Theme = "light" | "dark";
export type SizeType = "xSmall" | "small" | "medium" | "large";
export type ButtonType = "primary" | "secondary" | "tertiary";

export type OutputColorRangeDict = Record<Theme, [string, string]>;
