import { ProgressBarItem } from "./ProgressBarItem";
import { View } from "react-native";
import { AnswerStatus } from "@/type/game";
import { indent } from "@/lib/configs/ui/sizes";

export const ProgressBar = () => {
  // const statuses = useSelector(gameSelectors.getAnswerStatuses);
  // const testIndex = useSelector(gameSelectors.getCurrentTestIndex);
  const statuses: AnswerStatus[] = [
    "correct",
    "skipped",
    "wrong",
    "none",
    "correct",
    "skipped",
    "wrong",
    "none",
    "correct",
    "skipped",
    "wrong",
    "none",
    "correct",
    "skipped",
    "wrong",
    "none",
    "correct",
    "skipped",
    "wrong",
    "none",
    "correct",
    "skipped",
    "wrong",
    "none",
    "correct",
    // "skipped",
    // "wrong",
    // "none",
    // "correct",
    // "skipped",
    // "wrong",
    // "none",
  ];
  const testIndex = 3;
  if (!statuses) return null;

  return (
    <View
      style={{
        flexDirection: "row",
        height: 10,
        width: "100%",
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        marginTop: indent.x1,
        gap: 1,
      }}
    >
      {statuses.map((item, i) => (
        <ProgressBarItem status={item} isCurrent={i === testIndex} key={i} />
      ))}
    </View>
  );
};
