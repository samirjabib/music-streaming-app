import { Overlay, Title } from "@/design-system";
import { cn } from "@/lib";

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
        "rounded-lg shadow-lg h-full min-h-[200px]  flex items-center justify-center relative bg-secondary",
        className
      )}
    >
      <div className="absolute top-0 left-0 h-full w-full">
        <Overlay />
        {/* <Image src={imageUrl} alt={alt} fill /> */}
      </div>
      <div>
        <Title as="h2" size={"textTitle"}>
          {title}
        </Title>
      </div>
    </div>
  );
}
