import { User } from "@supabase/supabase-js";
import ActiveStepFormComponent from "./active-step-component";
import FormStepTabs from "./form-step-tabs";
import useFormUpload from "./hook/useFormUpload";

export default function FormUpload({
  user,
  producer_id,
}: {
  user: User | null;
  producer_id: string;
}) {
  const { step } = useFormUpload();

  return (
    <>
      <FormStepTabs step={step} />
      <ActiveStepFormComponent
        step={step}
        user={user}
        producer_id={producer_id}
      />
    </>
  );
}
