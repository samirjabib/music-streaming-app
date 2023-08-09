import { Dispatch, SetStateAction } from "react";
import {
  FormBeatValues,
  CombinedFormValues,
} from "../../types/form-validators-types";

export type FormUploadContext = {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
  onHandleBack: () => void;
  onHandleNext: () => void;
  step: number;
};
