import { useAppForm } from "@/hooks/useAppForm";
import { useRegister } from "@/hooks/useRegister";
import { RegisterSchema } from "@/shared/schemas/register";
import { Button } from "@/shared/components/Button/Button";
import { InputController } from "@/shared/components/controls/InputController";
import { PasswordInputController } from "@/shared/components/controls/PasswordInputController";
import { View } from "react-native";
import { ScreenWrapper } from "@/shared/components/ScreenWrapper/ScreenWrapper";
import { AuthHeader } from "@/shared/components/AuthHeader";
import { authStyles } from "@/entities/auth/styles";

export default function Register() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useAppForm({
    schema: RegisterSchema,
  });

  const { register, status } = useRegister(setError);

  return (
    <ScreenWrapper>
      <View style={authStyles.container}>
        <AuthHeader text="Регистрация" />
        <InputController
          name="email"
          control={control}
          placeholder="Email"
          error={errors.email?.message}
        />
        <InputController
          name="name"
          control={control}
          placeholder="Имя"
          error={errors.name?.message}
        />
        <PasswordInputController
          name="password"
          control={control}
          placeholder="Пароль"
          error={errors.password?.message}
        />
        <PasswordInputController
          name="repeatPassword"
          control={control}
          placeholder="Повторите пароль"
          error={errors.repeatPassword?.message}
        />
        <Button
          onPress={handleSubmit(register)}
          isLoading={status === "loading"}
          size="large"
        >
          Зарегистрироваться
        </Button>
      </View>
    </ScreenWrapper>
  );
}
