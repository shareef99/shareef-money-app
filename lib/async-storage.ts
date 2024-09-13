import { User } from "@/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const asyncStorageKeys = {
  user: "user",
} as const;

export const storeUser = async (user: User) => {
  try {
    await AsyncStorage.setItem(asyncStorageKeys.user, JSON.stringify(user));
  } catch (error) {
    throw error;
  }
};

export const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(asyncStorageKeys.user);
    if (jsonValue != null) {
      return JSON.parse(jsonValue) as User;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem(asyncStorageKeys.user);
  } catch (error) {
    throw error;
  }
};
