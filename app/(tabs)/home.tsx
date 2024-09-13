import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Link, router } from "expo-router";
import { useUserContext } from "@/context/userContext";
import Button from "@/components/Button";
import { removeUser } from "@/lib/async-storage";

export default function Index() {
  const { user, setUser } = useUserContext();

  useEffect(() => {
    if (!user) {
      router.replace("/sign-in");
    }
  }, [user]);

  return (
    <View>
      <Text>Index</Text>
      <Text>Welcome {user?.name}</Text>
      <Button
        className="w-fit"
        onPress={() => {
          setUser(null);
          removeUser();
        }}
      >
        Logout
      </Button>
      <Button className="w-fit" onPress={() => router.push("/")}>
        Signin
      </Button>
      <Link href="/">Home</Link>
    </View>
  );
}
