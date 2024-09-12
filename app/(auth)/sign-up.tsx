import { ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { colors } from "@/constants/colors";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { Link } from "expo-router";

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
type FormValues = z.infer<typeof schema>;

export default function SignUp() {
  // Form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  // Functions
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  return (
    <SafeAreaView className="bg-primary h-full px-4">
      <View className="mt-12 mb-8">
        <Text className="text-primary-text text-3xl font-bold">
          Create an account
        </Text>
      </View>
      <ScrollView
        className="space-y-8"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                title="Email"
                placeholder="example@gmail.com"
                placeholderTextColor={colors.card.charcoal}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.email}
              />
            )}
            name="email"
          />
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                title="Password"
                placeholder="******"
                placeholderTextColor={colors.card.charcoal}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.password}
                overrideErrorMessage={
                  errors.password?.type === "too_small"
                    ? "Password must be at least 6 characters"
                    : undefined
                }
                isPassword
              />
            )}
            name="password"
          />
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                title="Confirm Password"
                placeholder="******"
                placeholderTextColor={colors.card.charcoal}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.confirmPassword}
                overrideErrorMessage={
                  errors.confirmPassword?.type === "too_small"
                    ? "Password must be at least 6 characters"
                    : undefined
                }
                isPassword
              />
            )}
            name="confirmPassword"
          />
        </View>
        <View>
          <Button
            className="mt-4"
            onPress={handleSubmit(onSubmit, (error) => console.log(error))}
          >
            Sign Up
          </Button>
          <View className="pt-6 justify-center flex-row items-center gap-2">
            <Text className="text-lg text-primary-text font-regular">
              Already have an account?
            </Text>
            {/* @ts-ignore */}
            <Link href="/sign-in" className="text-lg font-medium text-accent">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
