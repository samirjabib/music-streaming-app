import { UserDetails } from "@/types/stripe";
import { Subscription } from "@/types/stripe";
import { User } from "@supabase/auth-helpers-react";

export type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  isLoading: boolean;
  subscription: Subscription | null;
};
