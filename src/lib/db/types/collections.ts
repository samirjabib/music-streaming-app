import { Database } from "./supabase";

export type Model = Database["public"]["Tables"]["beats"]["Row"];
