import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import Button from "@/components/Button";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, router } from "expo-router";

const Index = () => {
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
        {/* 
          IDK, why expo router types are not picking up. 
          There is an active issue on expo@51 https://github.com/expo/expo/issues/28680 
        */}
        {/* @ts-ignore */}
        <Button className="mt-12" onPress={() => router.push("/sign-in")}>
          Get Started
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Index;
