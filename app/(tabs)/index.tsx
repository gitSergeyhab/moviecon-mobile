import {
  categoryOptions,
  durationOptions,
} from "@/entities/gameSelector/constants";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppForm } from "@/hooks/useAppForm";
import { request } from "@/lib/api";
import { requestStartGame$ } from "@/lib/api/game";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { fontDict } from "@/lib/configs/ui/fonts";
import { indent } from "@/lib/configs/ui/sizes";
import { setFormErrors } from "@/lib/utils/errors";
import { Button } from "@/shared/components/Button/Button";
import { ModalSelectController } from "@/shared/components/controls/ModalSelectController";
import { ScreenWrapper } from "@/shared/components/ScreenWrapper/ScreenWrapper";
import {
  gameSelectionSchema,
  GameSelectionSchemaType,
} from "@/shared/schemas/gameSelection";
import { gameActions } from "@/store/game";
import { ApiError } from "@/type/api";
import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function GameSelector() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useAppForm({ schema: gameSelectionSchema });

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   request
  //     .get("/test/random-quests?category=world&count=40")
  //     .then((data) => console.log(data));
  //   // data.forEach((i) => {
  //   //   console.log({ i });
  //   //   console.log(i.variants);
  //   // })
  // }, []);

  // const onSubmit = handleSubmit((data) => {
  //   console.log(data);
  //   router.push("/game");
  // });
  // router.push("/game/1");

  const onSubmit = async (data: GameSelectionSchemaType) => {
    console.log({ data }, "onSubmit");
    try {
      const response = await requestStartGame$(data);
      console.log({ response });
      dispatch(gameActions.startGame(response));
      router.push(`/game/${response.gameId}`);
    } catch (e) {
      setFormErrors(e as ApiError, setError);
    }
  };

  return (
    <ScreenWrapper>
      <Text style={style.header}>Выберете игру</Text>
      <View style={style.form}>
        <ModalSelectController
          control={control}
          name="duration"
          options={durationOptions}
          placeholder="выбрать длительность"
          label="Длительность"
          modalWidth={280}
          error={errors.duration?.message}
        />
        <ModalSelectController
          control={control}
          name="category"
          options={categoryOptions}
          placeholder="выбрать категорию"
          label="Категория"
          modalWidth={280}
          error={errors.category?.message}
        />
        <View
          style={{
            marginTop: indent.x1,
            padding: indent.x5,
            backgroundColor: "transparent",
          }}
        >
          <Button onPress={handleSubmit(onSubmit)}>Начать игру</Button>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const style = StyleSheet.create({
  form: { width: 240, gap: indent.x4, marginTop: indent.x5 },
  header: {
    fontSize: fontDict.header,
    color: colorTheme.dark.text.accent,
    fontWeight: "700",
  },
});
