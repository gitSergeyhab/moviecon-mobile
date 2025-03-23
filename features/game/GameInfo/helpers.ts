import { gameStatusImages, imagePaths } from "@/shared/constants/images";
import { GameStatus } from "@/type/game";

const importImages = (strings: string[]) => {
  return strings.map((str) => imagePaths[str]);
};

export const getImportedImagesByStatus = (): Record<GameStatus, string[]> => {
  const images = {} as Record<GameStatus, string[]>;
  Object.keys(gameStatusImages).forEach((key) => {
    images[key as GameStatus] = importImages(
      gameStatusImages[key as GameStatus]
    );
  });
  return images;
};
