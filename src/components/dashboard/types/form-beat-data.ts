import * as z from "zod";
import { formDataBeat } from "../validators";

export type FormBeatValues = z.infer<typeof formDataBeat>;
