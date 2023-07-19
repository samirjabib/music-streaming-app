import * as z from "zod";
import { formBeatSchema } from "../validators";

export type FormBeatValues = z.infer<typeof formBeatSchema>;
