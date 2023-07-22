import { createContext } from "react";
import { FormUploadContext } from "./type";

const FormUploadContext = createContext<FormUploadContext>({
  formData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  step: 0,
});

export default FormUploadContext;
