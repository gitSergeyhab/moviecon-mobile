import {
  AnswerStatus,
  GameStatus,
  Level,
  LevelResult,
  TestDict,
} from "@/type/game";
import { RequestStatus } from "@/type/ui";

export interface GameState {
  gameId: string | null;
  levelsCount: number;
  levelInfo: Level | null;
  prevLevelResult: LevelResult | null;
  totalScore: number;
  levelScore: number;
  levelSkipped: number;
  levelErrors: number;
  answerStatuses: AnswerStatus[] | null;
  gameStatus: GameStatus;
  levelTestsDict: TestDict | null;
  levelTestsIds: string[];
  currentTestIndex: number;
  correctAnswerId: string | null | number;
  infoLoadingStatus: RequestStatus;
  loadingStatus: RequestStatus;
  isTransition: boolean;
  isImagePreloading: boolean;
}
