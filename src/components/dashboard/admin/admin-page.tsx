import dynamic from "next/dynamic";

import { DashboardGrid } from "../shared";

//Upload lazy
const PaymentSheetLazy = dynamic(
  () => import("../shared/payment/payment-sheet")
);
const PlanSheetLazy = dynamic(() => import("../shared/plan/plan-sheet"));
const SettingsSheetLazy = dynamic(
  () => import("../shared/settings/settings-sheet")
);
const UploadBeatModal = dynamic(() => import("./upload/upload-beat-modal"));

export default function AdminPage() {
  return (
    <div className=" py-20">
      <DashboardGrid>
        <UploadBeatModal />
        <PaymentSheetLazy />
        <PlanSheetLazy />
        <SettingsSheetLazy />
      </DashboardGrid>
    </div>
  );
}
