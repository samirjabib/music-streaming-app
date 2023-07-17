import { cn } from "@/lib";
import { ReactNode } from "react";

export default function Paragraph({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        "text-sm md:text-base leading-7 [&:not(:first-child)]:mt-6",
        className
      )}
    >
      {children}
    </p>
  );
}
