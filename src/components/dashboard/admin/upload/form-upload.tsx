import ActiveStepFormComponent from "./active-step-component";
import FormStepTabs from "./form-step-tabs";
import useFormUpload from "./hook/useFormUpload";

export default function FormUpload() {
  const { step } = useFormUpload();

  return (
    <>
      <FormStepTabs step={step} />
      <ActiveStepFormComponent step={step} />
    </>
  );
}
