import { ReactNode } from "react";
import Sidebar from "./sidebar";
import { Separator } from "@/design-system";
import HeaderDashboard from "./header";

const sidebarNavItems = [
  {
    title: "Subir Beat",
    href: "/dashboard/model",
  },
  {
    title: "Cuenta",
    href: "/dashboard/model/account",
  },
  {
    title: "Notificaciones",
    href: "/dashboard/model/notifications",
  },
  {
    title: "Plan",
    href: "/dashboard/model/announcements",
  },
];

export default function LayoutDashboard({ children }: { children: ReactNode }) {
  return (
    <div className=" wrapper-mobile wrapper  space-y-6 p-10  ">
      <HeaderDashboard />
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5 hidden  md:block">
          <Sidebar items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
}
