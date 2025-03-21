import { TopUserBlock } from "@/entities/TopUserBlok/TopUserBlock";
import { ScreenWrapper } from "@/shared/components/ScreenWrapper/ScreenWrapper";
import { Game } from "@/widgets/Game/Game";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function GameScreen() {
  const { id } = useLocalSearchParams();
  return (
    <>
      <TopUserBlock />
      <ScreenWrapper>
        <Game />
      </ScreenWrapper>
    </>
  );
}
