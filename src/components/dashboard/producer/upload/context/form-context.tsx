import { createContext } from "react";
import { FormUploadContext } from "./type";

const FormUploadContext = createContext<FormUploadContext>({
  formData: null,
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  step: 1,
});

export default FormUploadContext;
