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
const FormUploadModal = dynamic(() => import("./upload/form-upload-modal"));

export default function AdminPage() {
  return (
    <div className=" py-20">
      <DashboardGrid>
        <FormUploadModal />
        <PaymentSheetLazy />
        <PlanSheetLazy />
        <SettingsSheetLazy />
      </DashboardGrid>
    </div>
  );
}
