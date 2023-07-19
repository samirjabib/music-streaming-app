import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/design-system";
import DashboardCard from "../../shared/dashboard-card/dashboard-card";

export default function UploadBeatModal({}: {}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <DashboardCard alt="image" imageUrl=" " title="Subir beat" />
        </div>
      </DialogTrigger>
      <DialogContent
        position="top"
        className="w-[95%] md:w-full py-12  flex flex-col justify-center items-center "
      >
        <Tabs
          defaultValue="account"
          className="w-[400px]  flex flex-col items-center min-h-[400px] px-6"
        >
          <TabsList className="">
            <TabsTrigger value="subir-beat">Subir beat</TabsTrigger>
            <TabsTrigger value="precios">Precios</TabsTrigger>
            <TabsTrigger value="image">Imagen</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="subir-beat">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="precios">Imagen</TabsContent>
          <TabsContent value="Publicar">Change your password here.</TabsContent>
        </Tabs>
        <DialogFooter className="flex flex-col gap-2 sm:gap-0"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
