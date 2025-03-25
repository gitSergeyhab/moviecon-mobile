import { useState } from "react";
import { useQueryUserResultsByLoadMore } from "@/hooks/useQueryUserResult";
import { indent } from "@/lib/configs/ui/sizes";
import { ScreenHeader } from "@/shared/components/ui/texts";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { Button } from "@/shared/components/Button/Button";
import { AppTabs } from "@/entities/AppTabs/AppTabs";
import { GameCategory, GameDuration } from "@/type/game";
import { categoryTabData, durationTabData } from "@/entities/AppTabs/constants";
import { UserResultsTable } from "./UserResultsTable";
import { Text, View } from "react-native";
import { defaultQuery } from "./constants";
import { set } from "react-hook-form";

export const UserResults = () => {
  const [duration, setDuration] = useState<GameDuration | "none">("COMMON");
  const [category, setCategory] = useState<GameCategory | "none">("all");

  const { count, results, isLoading, isFetching, isError, setOffset } =
    useQueryUserResultsByLoadMore({ ...defaultQuery, duration, category });
  const onClickDuration = (durationItem: GameDuration | "none") => {
    setDuration(durationItem);
    setOffset(0);
  };
  const onClickCategory = (categoryItem: GameCategory | "none") => {
    setCategory(categoryItem);
    setOffset(0);
  };

  const onClickAllDurations = () => {
    setDuration("none");
    setOffset(0);
  };
  const onClickAllCategories = () => {
    setCategory("none");
    setOffset(0);
  };

  const loadMore = () => {
    setOffset((prev) => prev + defaultQuery.limit);
  };

  return (
    <>
      <ScreenHeader>Ваши рекорды</ScreenHeader>
      <View style={{ width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <AppTabs
            onPress={onClickAllCategories}
            selectedValue={category}
            tabData={[{ label: "Все категории", value: "none" }]}
            viewStyle={{ width: "50%" }}
          />
          <AppTabs
            onPress={onClickAllDurations}
            selectedValue={duration}
            tabData={[{ label: "Все длительности", value: "none" }]}
            viewStyle={{ width: "50%" }}
          />
        </View>
        <AppTabs
          onPress={onClickCategory}
          selectedValue={category}
          tabData={categoryTabData}
        />
        <AppTabs
          onPress={onClickDuration}
          selectedValue={duration}
          tabData={durationTabData}
        />
      </View>
      <View style={{ height: "70%", width: "100%" }}>
        {count > 0 || isLoading ? (
          <UserResultsTable
            isLoading={isLoading}
            isError={isError}
            results={results}
          />
        ) : (
          <Text
            style={{
              textAlign: "center",
              marginTop: indent.x4,
              color: colorTheme.dark.text.accent,
            }}
          >
            Нет результатов
          </Text>
        )}
        {count > 0 && count > results.length && (
          <Button
            styles={{ marginTop: indent.x4 }}
            isLoading={isFetching}
            onPress={loadMore}
          >
            Загрузить еще
          </Button>
        )}
      </View>
    </>
  );
};
