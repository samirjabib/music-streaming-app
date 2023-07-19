import { Input, Label } from "@/design-system";

export default function UploadInputBeat() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Arrastra el beat aqui o dale click</Label>
      <Input id="beat" type="file" />
    </div>
  );
}
