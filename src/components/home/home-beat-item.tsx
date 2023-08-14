"use client";

import { Card } from "@/design-system";
import { Beat, Cover_art, Files_beat } from "@/lib/db/types/collections";
import { getBeatCoverArt, getBeatFiles } from "@/lib/db/types/mutations/beats";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeBeatItem({ beat }: { beat: Beat }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [files, setFiles] = useState<Files_beat>();
  const [coverArt, setCoverArt] = useState<Cover_art>();

  const coverArtPath = coverArt?.file_path as string;

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const fetchedFiles = await getBeatFiles({ beat_id: beat.id });
      if ("error" in fetchedFiles) {
        console.error("Error fetching files:", fetchedFiles.error);
      } else {
        setFiles(fetchedFiles);
      }

      const fetchedCoverArt = await getBeatCoverArt({ beat_id: beat.id });
      if ("error" in fetchedCoverArt) {
        console.error("Error fetching cover art:", fetchedCoverArt.error);
      } else {
        setCoverArt(fetchedCoverArt);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(files, "I'm the files of beat");

  return (
    <div className="rounded md:p-4 ">
      <Card className="relative  w-full h-44 sm:h-72 md:h-2/3  rounded shadow-lg">
        <Image
          alt="image"
          src={coverArtPath}
          fill
          objectFit="cover"
          className="rounded"
        />
      </Card>
      <div className="mt-2">
        <div className="flex flex-row gap-x-4 items-center">
          <h4 className="text-primary/60 text-sm">${beat.license_basic}</h4>
          <span className="text-xs text-foreground/60">{beat.bpm}BPM</span>
        </div>
        <div className="py-2">
          <h3 className="text text-base text-foreground/80">{beat.beatname}</h3>
          <p className="text-foreground/60 text-sm">{beat.genre}</p>
        </div>
      </div>
    </div>
  );
}
