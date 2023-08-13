import { Database } from "./supabase";

export type Beat = Database["public"]["Tables"]["beats"]["Row"];
export type Files_beat = Database["public"]["Tables"]["files_beat"]["Row"];
export type Cover_art = Database["public"]["Tables"]["cover_art"]["Row"];
