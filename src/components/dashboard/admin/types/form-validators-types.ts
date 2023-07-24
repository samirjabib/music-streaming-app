import * as z from "zod";
import { formDataBeat, formFileBeat } from "../../validators";

export type FormBeatValues = z.infer<typeof formDataBeat>;
export type FormFilesValues = z.infer<typeof formFileBeat>;
