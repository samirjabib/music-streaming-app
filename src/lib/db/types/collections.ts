import { Database } from "./supabase";

export type Beat = Database["public"]["Tables"]["beats"]["Row"];
export type File = Database["public"]["Tables"]["files"]["Row"];
