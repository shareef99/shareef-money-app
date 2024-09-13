export type User = {
  id: number;
  name: string;
  email: string;
  currency: string;
  month_start_date: number;
  week_start_day: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
  refer_code: string;
  is_active: boolean;
};
