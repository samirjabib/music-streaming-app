import { archiveCompressorExtensions } from "@/components/dashboard/utils/constants";
import useFormUpload from "../../hook/useFormUpload";

export default function useFiles() {
  const { setFormData } = useFormUpload();

  const handleFileChangeMp3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name.toLowerCase().endsWith(".mp3")) {
      return file;
    } else {
      alert("Please select a valid .mp3 file.");
    }
  };

  const handleFileChangeWav = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name.toLowerCase().endsWith(".wav")) {
      return file;
    } else {
      alert("Please select a valid .wav file.");
    }
  };

  const handleFileChangeZip = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && isArchiveFile(file.name)) {
      console.log(isArchiveFile(file.name));
      return file;
    } else {
      alert("Please select a valid archive file (e.g., .zip, .rar).");
    }
  };

  const isArchiveFile = (fileName: string) => {
    const lowerCaseFileName = fileName.toLowerCase();
    return archiveCompressorExtensions.some((ext) =>
      lowerCaseFileName.endsWith(ext)
    );
  };

  const onDeleteFileMp3 = () => {
    //TODO: remember type this good
    setFormData((prev: any) => ({
      ...prev,
      fileMp3: null,
    }));
  };

  const onDeleteFileWav = () => {
    setFormData((prev: any) => ({
      ...prev,
      fileMp3: null,
    }));
  };

  const onDeleteFileZip = () => {
    setFormData((prev: any) => ({
      ...prev,
      fileMp3: null,
    }));
  };

  return {
    handleFileChangeMp3,
    handleFileChangeWav,
    handleFileChangeZip,
    onDeleteFileMp3,
    onDeleteFileWav,
    onDeleteFileZip,
  };
}
