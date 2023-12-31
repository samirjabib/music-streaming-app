import dynamic from "next/dynamic";

import { DashboardGrid } from "../shared";
import { User } from "@supabase/supabase-js";

//Upload lazy
const PaymentSheetLazy = dynamic(
  () => import("../shared/payment/payment-sheet")
);
const PlanSheetLazy = dynamic(() => import("../shared/plan/plan-sheet"));
const SettingsSheetLazy = dynamic(
  () => import("../shared/settings/settings-sheet")
);
const FormUploadModal = dynamic(() => import("./upload/form-upload-modal"));

export default function ProducerPage({
  user,
  producer_id,
}: {
  user: User | null;
  producer_id: string;
}) {
  return (
    <div className=" py-20">
      <DashboardGrid>
        <FormUploadModal user={user} producer_id={producer_id} />
        <PaymentSheetLazy />
        <PlanSheetLazy />
        <SettingsSheetLazy />
      </DashboardGrid>
    </div>
  );
}
