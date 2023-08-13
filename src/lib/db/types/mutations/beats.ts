"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import uniqid from "uniqid";
import { Database } from "../supabase";
import { BeatDataPayload } from "@/components/dashboard/producer/types";

const supabase = createClientComponentClient<Database>();

//mutationes
export async function uploadBeat({
  beatData,
  cover_art,
  file_mp3,
  user_id,
}: {
  beatData: BeatDataPayload;
  user_id: string;
  cover_art: File;
  file_mp3: File;
}) {
  try {
    const { data: data_beat, error: errorBeat } = await supabase
      .from("beats")
      .insert({ ...beatData, user_id })
      .select();

    if (errorBeat) {
      return { errorBeat };
    }

    //create file mp3 in files row
    const resMp3 = await uploadMp3({
      file_mp3,
      user_id,
      beat_id: data_beat[0].id,
    });

    //create covert art in files row
    const resCoverArt = await uploadCoverArt({
      coverArt: cover_art,
      user_id,
      beat_id: data_beat[0].id,
    });

    return { data_beat, resMp3, resCoverArt };
  } catch (error) {
    return { error };
  }
}

export async function uploadMp3({
  file_mp3,
  user_id,
  beat_id,
}: {
  file_mp3: File;
  user_id: string;
  beat_id: string;
}) {
  try {
    //save on the storage the mp3 file
    const beatMp3 = file_mp3 as File;
    const uniqueID = uniqid();
    const filePath = `beat-${user_id}-${uniqueID}.mp3`;

    const { data: fileMp3Data, error: fileMp3Error } = await supabase.storage
      .from(`/producers/${user_id}/beats`)
      .upload(filePath, beatMp3);

    if (fileMp3Error) {
      return { fileMp3Error };
    }

    //acces to url public to bucket
    const {
      data: { publicUrl: mp3PathFile },
    } = supabase.storage
      .from(`producers`)
      .getPublicUrl(`${user_id}/beats/${fileMp3Data.path}`);

    console.log(mp3PathFile, " RUN NOW");

    const payloadFileData = {
      file_path: mp3PathFile,
      user_id,
      beat_id,
    };

    const { data: dataMp3, error: errorMp3 } = await supabase
      .from("files")
      .insert(payloadFileData)
      .select();

    if (errorMp3) {
      return { errorMp3 };
    }

    return dataMp3;
  } catch (error) {
    return { Error };
  }
}

export async function uploadCoverArt({
  coverArt,
  user_id,
  beat_id,
}: {
  coverArt: File;
  user_id: string;
  beat_id: string;
}) {
  try {
    const uniqueID = uniqid();
    const { data: fileCoverArtData, error } = await supabase.storage
      .from(`producers/${user_id}/coverArt`)
      .upload(`coverArt-${user_id}-${uniqueID}.covertArt`, coverArt);

    if (error) {
      return { error };
    }

    //acces to url public to bucket
    const {
      data: { publicUrl: covertArtPublicPath },
    } = supabase.storage
      .from(`producers`)
      .getPublicUrl(`${user_id}/coverArt/${fileCoverArtData.path}`);

    //save object with path in files talbe

    const dataFile = {
      file_path: covertArtPublicPath,
      user_id,
      beat_id,
    };

    const { data: dataCoverArt, error: errorCoverArt } = await supabase
      .from("files")
      .insert(dataFile)
      .select();

    if (errorCoverArt) {
      return { errorCoverArt };
    }

    return dataCoverArt;
  } catch (error) {
    console.log(error);
  }
}
