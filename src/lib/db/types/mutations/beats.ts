"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import uniqid from "uniqid";

const supabase = createClientComponentClient();

export async function uploadMp3({
  mp3File,
  user_id,
}: {
  mp3File: File;
  user_id: string | undefined;
}) {
  try {
    console.log(mp3File, user_id);
    const uniqueID = uniqid();
    const { data: fileMp3Data, error: fileMp3Error } = await supabase.storage
      .from(`producers/${user_id}/beats/mp3`)
      .upload(`beat-${user_id}-${uniqueID}.mp3`, mp3File);

    if (fileMp3Error) {
      throw fileMp3Error;
    }
    return fileMp3Data;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadWav({
  wavFile,
  user_id,
}: {
  wavFile: File;
  user_id: string | undefined;
}) {
  try {
    console.log(wavFile, user_id);
    const uniqueID = uniqid();
    const { data: fileWavData, error: fileMp3Error } = await supabase.storage
      .from(`producers/${user_id}/beats/wav`)
      .upload(`beat-${user_id}-${uniqueID}.wav`, wavFile);

    if (fileMp3Error) {
      throw fileMp3Error;
    }
    return fileWavData;
  } catch (error) {
    console.log(error);
  }
}

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
    return fileCoverArtData;
  } catch (error) {
    console.log(error);
  }
}
