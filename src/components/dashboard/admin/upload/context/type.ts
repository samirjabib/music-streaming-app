import { Dispatch, SetStateAction } from "react";

export type FormUploadContext {
    formData: any;
    setFormData: Dispatch<SetStateAction<any>>;
    onHandleBack: () => void;
    onHandleNext: () => void;
    step: number;
  }