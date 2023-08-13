import { Beat } from "@/lib/db/types/collections";
import HomeBeatItem from "./home-beat-item";

export default function HomeHero({ beats }: { beats: Beat[] }) {
  console.log(beats);

  return (
    <div className="">
      {beats.map((beat) => (
        <HomeBeatItem beat={beat} />
      ))}
    </div>
  );
}
