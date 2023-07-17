import {
  CardContent,
  CardHeader,
  CardTitle,
  Card,
  Title,
} from "@/design-system";
import GridAnalytics from "./grid-annalitycs";
import AccountInfo from "../account-info/account-info";

export default function AccountAnalytics() {
  return (
    <div className="w-full   flex flex-col sm:flex-row h-full gap-4 ">
      <div className="w-full sm:w-1/2 h-full ">
        <AccountInfo />
      </div>
      <div className=" w-full grid grid-cols-1 sm:w-1/2  space-y-4">
        <GridAnalytics />
      </div>
    </div>
  );
}
