import { Input, Label } from "@/design-system";

export default function FormUplaodWav() {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name.toLowerCase().endsWith(".wav")) {
      // Handle the valid .wav file here (e.g., store it in state or upload to server)
      console.log("Selected file:", file);
    } else {
      alert("Please select a valid .wav file.");
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Sube wav</Label>
      <Input
        id="wav"
        type="file"
        className=""
        onChange={handleFileChange}
        accept=".wav"
      />
    </div>
  );
}
