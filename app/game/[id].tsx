import { GameInfo } from "@/features/game/GameInfo/GameInfo";
import appRoutes from "@/lib/configs/routes/routes";
import { ScreenWrapper } from "@/shared/components/ScreenWrapper/ScreenWrapper";
import { gameSelectors } from "@/store/game";
import { Game } from "@/widgets/Game/Game";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function GameScreen() {
  const gameStatus = useSelector(gameSelectors.getGameStatus);
  const gameId = useSelector(gameSelectors.getGameId);
  const [isInfo, setIsInfo] = useState(true);

  console.log({ gameStatus, gameId }, "GameScreen");

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (gameStatus === "IN_PROGRESS") {
      setIsInfo(false);
    } else {
      timer = setTimeout(() => setIsInfo(true), 500);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [gameStatus]);

  if (gameId === null) {
    return <Redirect href={appRoutes.main} />;
  }

  return <ScreenWrapper>{isInfo ? <GameInfo /> : <Game />}</ScreenWrapper>;
}
