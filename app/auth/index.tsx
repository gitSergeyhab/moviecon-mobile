import { Button } from "@/shared/components/Button/Button";
import { useAppForm } from "@/hooks/useAppForm";
import { LoginSchema } from "@/shared/schemas/login";
import { View } from "react-native";
import { InputController } from "@/shared/components/controls/InputController";
import { PasswordInputController } from "@/shared/components/controls/PasswordInputController";
import { useLogin } from "@/hooks/useLogin";
import { ScreenWrapper } from "@/shared/components/ScreenWrapper/ScreenWrapper";
import { AuthHeader } from "@/shared/components/AuthHeader";
import { authStyles } from "@/entities/auth/styles";

export default function Login() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useAppForm({
    schema: LoginSchema,
  });

  const { login, status } = useLogin(setError);

  return (
    <ScreenWrapper>
      <View style={authStyles.container}>
        <AuthHeader text="Вход" />
        <InputController
          name="email"
          control={control}
          placeholder="Email"
          error={errors.email?.message}
        />
        <PasswordInputController
          name="password"
          control={control}
          placeholder="Пароль"
          error={errors.password?.message}
        />
        <Button
          onPress={handleSubmit(login)}
          isLoading={status === "loading"}
          size="large"
        >
          Войти
        </Button>
      </View>
    </ScreenWrapper>
  );
}
