export const weekStartDay = [
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat",
  "sun",
] as const;
export type WeekStartDay = (typeof weekStartDay)[number];
