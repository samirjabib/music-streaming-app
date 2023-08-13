"use client";

import { Beat } from "@/lib/db/types/collections";
import { getBeatFiles } from "@/lib/db/types/mutations/beats";

export default async function HomeBeatItem({ beat }: { beat: Beat }) {
  //getFiles

  const files = await getBeatFiles({ beat_id: beat.id });

  console.log(files, " im the files of beat");

  return <div>{beat.beatname}</div>;
}
