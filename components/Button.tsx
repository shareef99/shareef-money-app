import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import type {
  ActivityIndicatorProps,
  TouchableOpacityProps,
} from "react-native";

const buttonVariants = cva("items-center justify-center rounded-md", {
  variants: {
    variant: {
      default: "bg-accent",
      primary: "bg-primary",
      secondary: "bg-secondary",
      orange: "bg-accent-orange",
      mint: "bg-accent-mint",
      success: "bg-accent-success",
      error: "bg-accent-error",
      outline: "border border-accent bg-primary ",
    },
    size: {
      default: "h-12 px-4 py-2",
      sm: "h-10 rounded-md px-3",
      lg: "h-14 rounded-md px-8",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type Props = TouchableOpacityProps &
  VariantProps<typeof buttonVariants> & {
    textClassName?: string;
    isLoading?: boolean;
    activityIndicatorProps?: ActivityIndicatorProps;
  };
export default function Button({
  size,
  variant,
  className,
  isLoading,
  activityIndicatorProps,
  ...props
}: Props) {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
      // It is intensional, I don't want it to be changeable from the outside
      onPress={isLoading ? () => {} : props.onPress}
      activeOpacity={0.8}
    >
      {isLoading ? (
        <ActivityIndicator
          color="white"
          size="large"
          {...activityIndicatorProps}
        />
      ) : typeof props.children === "string" ? (
        <Text className={cn("text-primary-text text-lg font-semibold")}>
          {props.children}
        </Text>
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
}
