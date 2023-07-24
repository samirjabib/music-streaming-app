import FormDataBeat from "./form-data-beat/form-data-beat";
import FormFilesBeat from "./form-files-beat/form-files-beat";
import FormLicenseBeat from "./form-license-beat/form-license-beat";

export default function ActiveStepFormComponent({ step }: { step: number }) {
  switch (step) {
    case 1:
      return <FormDataBeat />;
    case 2:
      return <FormFilesBeat />;
    case 3:
      return <FormLicenseBeat />;
    default:
      return null;
  }
}
