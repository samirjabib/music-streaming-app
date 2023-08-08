"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import uniqid from "uniqid";
import { Database } from "../supabase";

const supabase = createClientComponentClient<Database>();

export async function uploadBeat({ beatData }: { beatData: {} }) {
  try {
    const { data: beat, error } = await supabase
      .from("beats")
      .insert(beatData)
      .select();

    if (error) {
      return { error };
    }

    return { beat };
  } catch (error) {
    return { error };
  }
}

export async function uploadMp3({
  mp3File,
  user_id,
  producer_id,
}: {
  mp3File: File | null;
  user_id: string | undefined;
  producer_id: string;
}) {
  try {
    //save on the storage the mp3 file
    const beatMp3 = mp3File as File;
    const uniqueID = uniqid();
    const { data: fileMp3Data, error: fileMp3Error } = await supabase.storage
      .from(`${user_id}/beats/mp3`)
      .upload(`beat-${user_id}-${uniqueID}.mp3`, beatMp3);

    if (fileMp3Error) {
      return { fileMp3Error };
    }

    //acces to url public to bucket
    const {
      data: { publicUrl: mp3PathFile },
    } = supabase.storage
      .from(`producers`)
      .getPublicUrl(`${user_id}/beats/mp3/${fileMp3Data.path}`);

    const payloadFileData = {
      file_path: mp3PathFile,
      user_id,
      producer_id,
    };

    // console.log(payloadFileData);

    // const { data: dataFile } = supabase
    //   .from("files")
    //   .insert(payloadFileData)
    //   .select();

    return { dataFile };
  } catch (error) {
    return { Error };
  }
}

// export async function uploadWav({
//   wavFile,
//   user_id,
// }: {
//   wavFile: File;
//   user_id: string | undefined;
// }) {
//   try {
//     console.log(wavFile, user_id);
//     const uniqueID = uniqid();
//     const { data: fileWavData, error: fileMp3Error } = await supabase.storage
//       .from(`producers/${user_id}/beats/wav`)
//       .upload(`beat-${user_id}-${uniqueID}.wav`, wavFile);

//     if (fileMp3Error) {
//       throw fileMp3Error;
//     }
//     return fileWavData.path;
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function uploadCoverArt({
  coverArt,
  user_id,
}: {
  coverArt: File;
  user_id: string | undefined;
}) {
  try {
    const uniqueID = uniqid();
    const { data: fileCoverArtData, error: fileMp3Error } =
      await supabase.storage
        .from(`producers/${user_id}/beats/coverArt`)
        .upload(`beat-${user_id}-${uniqueID}.covertArt`, coverArt);

    if (fileMp3Error) {
      throw fileMp3Error;
    }
    return fileCoverArtData.path;
  } catch (error) {
    console.log(error);
  }
}
