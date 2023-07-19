import { ReactNode } from "react";
import AccountAnalytics from "../account-analytics/account-analitycs";

export default function DashboardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row wrapper wrapper-mobile gap-4">
      <div className=" w-full sm:w-1/2">
        <AccountAnalytics />
      </div>
      <div className="w-full sm:w-1/2">
        <div className="grid grid-cols-1  md:grid-cols-2  item-center justify-center  border-2 gap-6">
          {children}
        </div>
      </div>
    </div>
  );
}
