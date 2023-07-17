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
    <div className="w-full flex flex-row h-full gap-4 ">
      <div className="w-1/2 h-full ">
        <AccountInfo />
      </div>
      <div className="grid grid-cols-1  w-1/2 gap-4">
        <GridAnalytics />
      </div>
    </div>
  );
}
