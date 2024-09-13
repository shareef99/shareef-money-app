import { AxiosError } from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseError(error: unknown): string {
  if (error instanceof AxiosError) {
    if (error.response) {
      if (error.response.data) {
        if (typeof error.response.data === "string") {
          return error.response.data;
        }

        if (error.response.data.response) {
          if (typeof error.response.data.response === "string") {
            return error.response.data.response;
          }

          if (error.response.data.response.message) {
            if (typeof error.response.data.response.message === "string") {
              return error.response.data.response.message;
            }
          }
        }

        if (error.response.data.message) {
          if (typeof error.response.data.message === "string") {
            return error.response.data.message;
          }
        }
      }
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  if (error === undefined || error === null) {
    return "No error provided";
  }

  return "Parse error properly";
}
