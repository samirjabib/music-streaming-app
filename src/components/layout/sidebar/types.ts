import { IconNode } from "lucide-react";

export type RouteType = {
  label: string;
  active: boolean;
  href: string;
  icon?: IconNode;
};
