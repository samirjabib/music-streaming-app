import { ReactNode, useState } from "react";
import FormUploadContext from "./form-context";
import { FormBeatValues } from "../../types/form-validators-types";

const defaultValues: FormBeatValues = {
  beatname: "",
  bpm: "",
  genre: "",
  key: {
    key: "",
    type: "",
  },
};

export default function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState(defaultValues);
  const [step, setStep] = useState(1);

  function onHandleNext() {
    setStep((prev) => prev + 1);
  }

  function onHandleBack() {
    setStep((prev) => prev - 1);
  }

  return (
    <FormUploadContext.Provider
      value={{ formData, setFormData, onHandleBack, onHandleNext, step }}
    >
      {children}
    </FormUploadContext.Provider>
  );
}
