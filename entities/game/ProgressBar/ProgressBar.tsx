import { ProgressBarItem } from "./ProgressBarItem";
import { View } from "react-native";
import { AnswerStatus } from "@/type/game";
import { styles } from "./styles";

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
    <View style={styles.container}>
      {statuses.map((item, i) => (
        <ProgressBarItem status={item} isCurrent={i === testIndex} key={i} />
      ))}
    </View>
  );
};
