import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { useEffect } from "react";
import { useUserContext } from "@/context/userContext";

const Index = () => {
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      router.replace("/(tabs)");
    }
  }, []);

  return (
    <SafeAreaView className="bg-primary h-full justify-center items-center w-full px-4">
      <View className="">
        <Text className="text-primary-text text-center font-semibold text-5xl mb-2">
          S{" "}
          <MaterialCommunityIcons name="account-cash" size={48} color="white" />
        </Text>
        <Text className="text-primary-text text-center text-3xl mb-2">
          Welcome to
        </Text>
        <Text className="font-semibold text-3xl text-accent text-center">
          Shareef Money
        </Text>
        <Text className="text-primary-text text-center mt-4 font-medium text-xl">
          Track your expenses, manage income, and take control of your finances
        </Text>

        <Button className="mt-12" onPress={() => router.push("/sign-in")}>
          Get Started
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Index;
