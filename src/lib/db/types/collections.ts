import { Database } from "./supabase";

export type Beats = Database["public"]["Tables"]["beats"]["Row"];
export type Files = Database["public"]["Tables"]["files"]["Row"];
