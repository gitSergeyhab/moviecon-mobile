import { FC } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import appRoutes from "@/lib/configs/routes/routes";
import { gameActions, gameSelectors } from "@/store/game";
import { fetchStartLevel } from "@/store/game/thunks";
import { Button } from "@/shared/components/Button/Button";
import { router } from "expo-router";

interface GameButtonBlockProps {
  isGameOver: boolean;
}
export const GameButtonBlock: FC<GameButtonBlockProps> = ({ isGameOver }) => {
  const dispatch = useAppDispatch();

  const loadingStatus = useSelector(gameSelectors.getLoadingStatus);
  const isLoading = loadingStatus === "loading";
  const start = () => dispatch(fetchStartLevel());
  const restart = () => {
    dispatch(gameActions.resetGame({}));
    router.push(appRoutes.main);
  };

  return (
    <Button
      onPress={isGameOver ? restart : start}
      disabled={!isGameOver && isLoading}
    >
      {isGameOver ? "Сыграть еще" : "Начать Уровень"}
    </Button>
  );
};
