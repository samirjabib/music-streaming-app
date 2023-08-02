import { User } from "@supabase/supabase-js";
import ActiveStepFormComponent from "./active-step-component";
import FormStepTabs from "./form-step-tabs";
import useFormUpload from "./hook/useFormUpload";

export default function FormUpload({ user }: { user: User | null }) {
  const { step } = useFormUpload();

  return (
    <>
      <FormStepTabs step={step} />
      <ActiveStepFormComponent step={step} user={user} />
    </>
  );
}
