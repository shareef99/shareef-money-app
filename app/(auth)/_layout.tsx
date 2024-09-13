import { useUserContext } from "@/context/userContext";
import { router, Stack } from "expo-router";
import { useEffect } from "react";

export default function AuthLayout() {
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      router.replace("/home");
    }
  }, []);

  return (
    <Stack>
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
    </Stack>
  );
}
