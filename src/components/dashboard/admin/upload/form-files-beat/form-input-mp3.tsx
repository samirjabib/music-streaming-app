import { Input, Label } from "@/design-system";

export default function FormUploadMp3() {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name.toLowerCase().endsWith(".mp3")) {
      // Handle the valid .mp3 file here (e.g., store it in state or upload to server)
      console.log("Selected file:", file);
    } else {
      alert("Please select a valid .mp3 file.");
    }
  };
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Subir mp3</Label>
      <Input
        id="mp3"
        type="file"
        className=""
        onChange={handleFileChange}
        accept=".mp3"
      />
    </div>
  );
}
