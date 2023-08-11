import { FC } from "react";
import Logo from "@/design-system/elements/logo/logo";
import Desktopnavbar from "./desktop/desktop-navbar";
import { User } from "@supabase/supabase-js";

const HeaderDashboard = ({ user }: { user: User | null }) => {
  return (
    <div className="w-full wrapper wrapper-mobile">
      <div className="flex flex-col justify-center w-full items-center gap-y-2 py-8  ">
        <Logo />
      </div>
      <div className="space-y-0.5 w-full hidden md:block">
        <Desktopnavbar user={user} />
      </div>
      <div className="md:hidden"></div>
    </div>
  );
};

export default HeaderDashboard;
