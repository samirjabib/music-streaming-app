import { cn } from "@/lib";

export default function Box({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg h-fit w-full bg-secondary", className)}>
      {children}
    </div>
  );
}
