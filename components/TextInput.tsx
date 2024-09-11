import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";
import {
  TextInput as RNTextInput,
  Text,
  TextInputProps,
  View,
} from "react-native";

type Props = TextInputProps & {
  classNames?: {
    container?: string;
    inputContainer?: string;
    title?: string;
    error?: string;
  };
  title?: string;
  error?: FieldError;
  overrideErrorMessage?: string;
};
export default function TextInput({
  className,
  classNames,
  title,
  error,
  overrideErrorMessage,
  ...props
}: Props) {
  return (
    <View className={cn("space-y-2 relative", classNames?.container)}>
      <Text
        className={cn(
          "text-base text-secondary-text font-medium",
          classNames?.title
        )}
      >
        {title}
      </Text>
      <View
        className={cn(
          "w-full h-12 px-4 border-2 flex-grow flex-row border-card-charcoal rounded-md items-center focus:border-accent",
          classNames?.inputContainer
        )}
      >
        <RNTextInput
          className={cn(
            "flex-1 text-primary-text text-base font-semibold",
            className
          )}
          {...props}
        />
      </View>
      {error && (
        <Text
          className={cn(
            "text-accent-error absolute -bottom-6",
            classNames?.error
          )}
        >
          {overrideErrorMessage || error.message}
        </Text>
      )}
    </View>
  );
}
