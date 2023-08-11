import * as z from "zod";

import { formDataBeat, formFileBeat, formPublishBeat } from "../../validators";

export type FormBeatValues = z.infer<typeof formDataBeat>;
export type FormFilesValues = z.infer<typeof formFileBeat>;
export type FormPublishValues = z.infer<typeof formPublishBeat>;

export type CombinedFormValues =
  | FormBeatValues
  | FormFilesValues
  | FormPublishValues;
