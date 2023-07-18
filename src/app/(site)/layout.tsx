import { Header } from "@/components/layout";
import Sidebar from "@/components/layout/sidebar/Sidebar";

export const metadata = {
  title: "Music Beats App",
  description: "Listen Beats",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen py-3">
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
