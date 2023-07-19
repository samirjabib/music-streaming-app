import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/design-system";
import DashboardCard from "../dashboard-card/dashboard-card";

export default function AccountSettingsSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <DashboardCard
          className="bg-none"
          title="Ajustes de la cuenta"
          alt="payment-sheet"
          imageUrl=""
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Ajustes de la cuenta</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
