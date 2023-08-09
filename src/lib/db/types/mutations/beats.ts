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
  user_id: string;
  producer_id: string;
}) {
  try {
    //save on the storage the mp3 file
    const beatMp3 = mp3File as File;
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

    //https://fjotjcdtzmwiqufibxet.supabase.co/storage/v1/object/sign/producers/ae026676-28ab-4042-94fd-13c454126003/beats/beat-ae026676-28ab-4042-94fd-13c454126003-ll303jtk.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWNlcnMvYWUwMjY2NzYtMjhhYi00MDQyLTk0ZmQtMTNjNDU0MTI2MDAzL2JlYXRzL2JlYXQtYWUwMjY2NzYtMjhhYi00MDQyLTk0ZmQtMTNjNDU0MTI2MDAzLWxsMzAzanRrLm1wMyIsImlhdCI6MTY5MTU0MzEzNCwiZXhwIjoxNjkyMTQ3OTM0fQ.Xrj4bwdtTYi_dcmoaozSCKJlSZYlw109Zupg1RknHig&t=2023-08-09T01%3A05%3A34.365Z
    console.log(mp3PathFile, " RUN NOW");

    //https://fjotjcdtzmwiqufibxet.supabase.co/storage/v1/object/public/producers/ae026676-28ab-4042-94fd-13c454126003/beats/beat-ae026676-28ab-4042-94fd-13c454126003-ll3171ro.mp3
    const payloadFileData = {
      file_path: mp3PathFile,
      user_id,
      producer_id,
    };

    return payloadFileData;
  } catch (error) {
    return { Error };
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
    const { data: fileCoverArtData, error } = await supabase.storage
      .from(`producers/${user_id}/coverArt`)
      .upload(`beat-${user_id}-${uniqueID}.covertArt`, coverArt);

    if (error) {
      return { error };
    }

    //acces to url public to bucket
    const {
      data: { publicUrl: covertArtPublicPath },
    } = supabase.storage
      .from(`producers`)
      .getPublicUrl(`${user_id}/beats/mp3/${fileCoverArtData.path}`);

    return covertArtPublicPath;
  } catch (error) {
    console.log(error);
  }
}
