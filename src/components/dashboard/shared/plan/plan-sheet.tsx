import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/design-system";
import DashboardCard from "../dashboard-card/dashboard-card";

export default function Plan() {
  return (
    <Sheet>
      <SheetTrigger className="bg-none">
        <DashboardCard
          className="bg-none"
          title="Plan"
          alt="payment-sheet"
          imageUrl=""
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
