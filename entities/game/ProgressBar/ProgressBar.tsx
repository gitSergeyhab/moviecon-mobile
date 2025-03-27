import { ProgressBarItem } from "./ProgressBarItem";
import { View } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { gameSelectors } from "@/store/game";

export const ProgressBar = () => {
  const statuses = useSelector(gameSelectors.getAnswerStatuses);
  const testIndex = useSelector(gameSelectors.getCurrentTestIndex);

  if (!statuses) return null;

  return (
    <View style={styles.container}>
      {statuses.map((item, i) => (
        <ProgressBarItem status={item} isCurrent={i === testIndex} key={i} />
      ))}
    </View>
  );
};
