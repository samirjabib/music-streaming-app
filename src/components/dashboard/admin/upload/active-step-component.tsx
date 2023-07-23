import FormDataBeat from "./form-data-beat/form-data-beat";
import FormFilesBeat from "./form-files-beat/form-files-beat";
import useFormUpload from "./hook/useFormUpload";

export default function ActiveStepFormComponent() {
  const { step } = useFormUpload();

  switch (step) {
    case 1:
      return <FormDataBeat />;
    case 2:
      return <FormFilesBeat />;
    case 3:
      return <FormDataBeat />;
    default:
      return null;
  }
}
