import { useContext } from "react";
import FormUploadContext from "../context/form-context";

export default function useFormUpload() {
  return useContext(FormUploadContext);
}
