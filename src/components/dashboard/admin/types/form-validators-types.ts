import * as z from "zod";
import { formDataBeat, formFileBeat, formLicensesBeat } from "../../validators";

export type FormBeatValues = z.infer<typeof formDataBeat>;
export type FormFilesValues = z.infer<typeof formFileBeat>;
export type FormLicenseValues = z.infer<typeof formLicensesBeat>;
