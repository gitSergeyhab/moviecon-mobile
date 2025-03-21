// import {
//   categoryOptions,
//   durationOptions,
// } from "@/entities/gameSelector/constants";
// import { useAppForm } from "@/hooks/useAppForm";
// import { request } from "@/lib/api";
// import { colorTheme } from "@/lib/configs/ui/colorTheme";
// import { fontDict } from "@/lib/configs/ui/fonts";
// import { indent } from "@/lib/configs/ui/sizes";
// import { Button } from "@/shared/components/Button/Button";
// import { ModalSelectController } from "@/shared/components/controls/ModalSelectController";
// import { ScreenWrapper } from "@/shared/components/ScreenWrapper/ScreenWrapper";
// import { gameSelectionSchema } from "@/shared/schemas/gameSelection";
// import { router } from "expo-router";
// import { useEffect } from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function GameSelector() {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useAppForm({ schema: gameSelectionSchema });

//   // useEffect(() => {
//   //   request
//   //     .get("/test/random-quests?category=world&count=40")
//   //     .then((data) => console.log(data));
//   //   // data.forEach((i) => {
//   //   //   console.log({ i });
//   //   //   console.log(i.variants);
//   //   // })
//   // }, []);

//   const onSubmit = handleSubmit((data) => {
//     console.log(data);
//     router.push("/game/1");
//   });
//   // router.push("/game/1");

//   return (
//     <ScreenWrapper>
//       <Text style={style.header}>Выберете игру</Text>
//       <View style={style.form}>
//         <ModalSelectController
//           control={control}
//           name="duration"
//           options={durationOptions}
//           placeholder="выбрать длительность"
//           label="Длительность"
//           modalWidth={280}
//           error={errors.duration?.message}
//         />
//         <ModalSelectController
//           control={control}
//           name="category"
//           options={categoryOptions}
//           placeholder="выбрать категорию"
//           label="Категория"
//           modalWidth={280}
//           error={errors.category?.message}
//         />
//         <View
//           style={{
//             marginTop: indent.x1,
//             padding: indent.x5,
//             backgroundColor: "transparent",
//           }}
//         >
//           <Button onPress={onSubmit}>Начать игру</Button>
//         </View>
//       </View>
//     </ScreenWrapper>
//   );
// }

// const style = StyleSheet.create({
//   form: { width: 240, gap: indent.x4, marginTop: indent.x5 },
//   header: {
//     fontSize: fontDict.header,
//     color: colorTheme.dark.text.accent,
//     fontWeight: "700",
//   },
// });

import { TopUserBlock } from "@/entities/TopUserBlok/TopUserBlock";
import { ScreenWrapper } from "@/shared/components/ScreenWrapper/ScreenWrapper";
import { Game } from "@/widgets/game/Game";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function GameScreen() {
  const { id } = useLocalSearchParams();
  return (
    <>
      <ScreenWrapper>
        <Game />
      </ScreenWrapper>
    </>
  );
}
