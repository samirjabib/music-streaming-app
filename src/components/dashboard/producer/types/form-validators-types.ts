import * as z from "zod";

import { formDataBeat, formFileBeat, formPublishBeat } from "../../validators";

export type FormBeatValues = z.infer<typeof formDataBeat>;
export type FormFilesValues = z.infer<typeof formFileBeat>;
export type FormPublishValues = z.infer<typeof formPublishBeat>;

export type CombinedFormValues =
  | FormBeatValues
  | FormFilesValues
  | FormPublishValues;

export type BeatDataPayload = {
  beatname: string;
  bpm: string;
  tags: string[];
  license_basic: string;
  genre: string;
  key: {
    key: string;
    type: string;
  };
};
