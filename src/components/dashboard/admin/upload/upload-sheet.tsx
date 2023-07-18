import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/design-system";
import DashboardCard from "../../shared/dashboard-card/dashboard-card";

export default function UploadSheet() {
  return (
    <Sheet>
      <SheetTrigger className="bg-none">
        <DashboardCard
          alt="image"
          imageUrl="	https://png.pngtree.com/background/20211217/origin…ns-of-orange-and-yellow-picture-image_1594553.jpg"
          title="Upload Beat"
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
