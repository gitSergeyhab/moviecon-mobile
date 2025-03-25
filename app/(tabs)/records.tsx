import { useQueryRecords } from "@/hooks/useQueryRecords";
import { Text } from "react-native";
import { ScreenWrapper } from "@/shared/components/ScreenWrapper/ScreenWrapper";
import { ScreenLoader } from "@/entities/ScreenLoader/ScreenLoader";

import { Records } from "@/widgets/Records/Records";

export default function RecordsScreen() {
  const { isError, isLoading, records } = useQueryRecords(3);
  if (isLoading) {
    return <ScreenLoader />;
  }

  if (isError || !records) {
    return <Text>TODO: ERROR!!!</Text>;
  }

  return (
    <ScreenWrapper>
      <Records records={records} />
    </ScreenWrapper>
  );
}
