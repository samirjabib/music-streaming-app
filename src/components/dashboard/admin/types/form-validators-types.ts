import * as z from "zod";

import {
  formDataBeat,
  formFileBeat,
  formLicensesBeat,
  formPublishBeat,
} from "../../validators";

export type FormBeatValues = z.infer<typeof formDataBeat>;
export type FormFilesValues = z.infer<typeof formFileBeat>;
export type FormLicenseValues = z.infer<typeof formLicensesBeat>;
export type FormPublishValues = z.infer<typeof formPublishBeat>;
