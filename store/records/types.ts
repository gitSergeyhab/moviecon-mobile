import { UserAggregateRecords } from "@/type/game-results";
import { RequestStatus } from "@/type/ui";

export interface RecordState {
  records: UserAggregateRecords[] | null;
  status: RequestStatus;
}
