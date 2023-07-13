"use client";
import { Icons, Title } from "@/design-system";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeListItem({
  href,
  image,
  name,
}: {
  image: string;
  name: string;
  href: string;
}) {
  const router = useRouter();

  const onClick = () => {
    //Add authentication before push
    router.push(href);
  };

  return (
    <button
      className="relative 
    group 
    flex 
    items-center 
    rounded-md 
    overflow-hidden 
    gap-x-4 
    cursor-pointer 
    bg-foreground/20
    hover:bg-foreground/40
    transition 
    pr-4"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" src={image} fill alt="Image" />{" "}
      </div>
      <Title as="h3" size={"textSubtitle"}>
        {name}
      </Title>
      <div
        className="
          absolute 
          transition 
          opacity-0 
          rounded-full 
          flex 
          items-center 
          justify-center 
          bg-background
          p-2
          drop-shadow-md 
          right-5
          group-hover:opacity-100 
          hover:scale-110
        "
      >
        <Icons.play size={20} className="text-foreground" />
      </div>
    </button>
  );
}
