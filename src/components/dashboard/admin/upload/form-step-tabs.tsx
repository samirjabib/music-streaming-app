import { cn } from "@/lib";
import { menuItems } from "./utils/constants";

export default function FormStepTabs({ step }: { step: number }) {
  return (
    <div className="  py-1 px-1 flex flex-row  justify-between bg-secondary rounded-lg text-sm mb-4">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={cn(
            "py-1 px-2 transition-all text-xs sm:text-sm md:text-base ",
            step === item.id
              ? "bg-primary/20  rounded-lg text-foreground"
              : "text-foreground/80"
          )}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}
