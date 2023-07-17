import { Header } from "@/components/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dasboard Layout",
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: DashboardLayoutProps) {
  return <>{children}</>;
}
