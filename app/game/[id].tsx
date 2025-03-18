import { TopUserBlock } from "@/entities/TopUserBlok/TopUserBlock";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function GameScreen() {
  const { id } = useLocalSearchParams();
  return (
    <>
      <TopUserBlock />

      <View>
        <Text>Game Screen: {id}</Text>
      </View>
    </>
  );
}
