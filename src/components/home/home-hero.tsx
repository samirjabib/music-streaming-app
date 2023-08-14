import { Beat } from "@/lib/db/types/collections";
import HomeBeatItem from "./home-beat-item";
import { Title } from "@/design-system";

export default function HomeHero({ beats }: { beats: Beat[] }) {
  console.log(beats);

  return (
    <div className="">
      <Title as="h2" size={"textTitle"} className="mb-4">
        New Beats
      </Title>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 ">
        {beats.map((beat) => (
          <HomeBeatItem beat={beat} />
        ))}
      </div>
    </div>
  );
}
