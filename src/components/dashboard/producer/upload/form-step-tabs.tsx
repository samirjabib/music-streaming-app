import { cn } from "@/lib";
import { menuItems } from "./utils/constants";

export default function FormStepTabs({ step }: { step: number }) {
  return (
    <div className="  py-1 px-2 flex flex-row  justify-between bg-secondary rounded-lg text-sm mb-4">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={cn(
            "py-1 px-2 transition-all text-xs sm:text-sm md:text-base ",
            step === item.id
              ? "border-b-2  border-primary  text-foreground"
              : "text-foreground/80"
          )}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}
