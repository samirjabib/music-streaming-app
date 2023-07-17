import { DashboardGrid } from "../shared";
import PaymentSheet from "../shared/payment/payment-sheet";
import PlanSheet from "../shared/plan/plan-sheet";
import SettingsSheet from "../shared/settings/settings-sheet";
import UploadSheet from "./upload/upload-sheet";

export default function AdminPage() {
  return (
    <div className=" py-20">
      <DashboardGrid>
        <UploadSheet />
        <PlanSheet />
        <PaymentSheet />
        <SettingsSheet />
      </DashboardGrid>
    </div>
  );
}
