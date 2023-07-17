import { Overlay, Title } from "@/design-system";
import { cn } from "@/lib";
import Image from "next/image";

export default function DashboardCard({
  className,
  imageUrl,
  alt,
  title,
}: {
  className?: string;
  imageUrl: string;
  alt: string;
  title: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg shadow-lg h-full min-h-[200px] bg-primary-foreground flex items-center justify-center relative",
        className
      )}
    >
      <div className="absolute top-0 left-0">
        <Overlay />
        <Image src={imageUrl} alt={alt} />
      </div>
      <div>
        <Title as="h2" size={"textTitle"}>
          {title}
        </Title>
      </div>
    </div>
  );
}
