import { User } from "@supabase/supabase-js";
import FormDataBeat from "./form-data-beat/form-data-beat";
import FormFilesBeat from "./form-files-beat/form-files-beat";
import FormPublishBeat from "./form-publish-beat/form-publish-beat";

export default function ActiveStepFormComponent({
  step,
  user,
  producer_id,
}: {
  step: number;
  user: User | null;
  producer_id: string;
}) {
  switch (step) {
    case 1:
      return <FormDataBeat />;
    case 2:
      return <FormFilesBeat />;
    case 3:
      return <FormPublishBeat user={user} producer_id={producer_id} />;
    default:
      return null;
  }
}
