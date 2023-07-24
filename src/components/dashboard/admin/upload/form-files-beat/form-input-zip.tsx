import { Input, Label } from "@/design-system";

export default function FormUploadZip() {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && isArchiveFile(file.name)) {
      // Handle the valid archive file here (e.g., store it in state or upload to server)
      console.log("Selected file:", file);
    } else {
      alert("Please select a valid archive file (e.g., .zip, .rar).");
    }
  };

  const isArchiveFile = (fileName: string) => {
    const validExtensions = [".zip", ".rar", ".7z"]; // Add more valid archive extensions if needed
    const lowerCaseFileName = fileName.toLowerCase();
    return validExtensions.some((ext) => lowerCaseFileName.endsWith(ext));
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Subir stems</Label>
      <Input
        id="archive"
        type="file"
        className=""
        onChange={handleFileChange}
        accept=".zip, .rar, .7z"
      />
    </div>
  );
}
