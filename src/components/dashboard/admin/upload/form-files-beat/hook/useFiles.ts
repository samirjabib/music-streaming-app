import { archiveCompressorExtensions } from "@/components/dashboard/utils/constants";
import useFormUpload from "../../hook/useFormUpload";

export const imageExtensions = [".jpg", ".jpeg", ".png", ".webp"];
export const videoExtensions = [".mp4", ".webm", ".ogg"];

export default function useFiles() {
  const { setFormData } = useFormUpload();

  //handles state
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

  const handleFileChangeVideo = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file && isVideoFile(file.name)) {
      return file;
    } else {
      alert("Please select a valid video file (.mp4, .webm, or .ogg)");
    }
  };

  //validations
  const isVideoFile = (fileName: string) => {
    const lowerCaseFileName = fileName.toLowerCase();
    return videoExtensions.some((ext) => lowerCaseFileName.endsWith(ext));
  };

  const isArchiveFile = (fileName: string) => {
    const lowerCaseFileName = fileName.toLowerCase();
    return archiveCompressorExtensions.some((ext) =>
      lowerCaseFileName.endsWith(ext)
    );
  };

  const isImageFile = (fileName: string) => {
    const lowerCaseFileName = fileName.toLowerCase();
    return imageExtensions.some((ext) => lowerCaseFileName.endsWith(ext));
  };

  //deletes
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

  const handleFileChangeImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file && isImageFile(file.name)) {
      return file;
    } else {
      alert(
        "Selecciona un archivo de imagen valido (.jpg, .jpeg, .png, or .webp)"
      );
    }
  };

  const onDeleteFileImage = () => {
    setFormData((prev: any) => ({
      ...prev,
      fileImage: null,
    }));
  };

  const onDeleteFileVideo = () => {
    setFormData((prev: any) => ({
      ...prev,
      fileVideo: null,
    }));
  };

  return {
    //music
    handleFileChangeMp3,
    handleFileChangeWav,
    handleFileChangeZip,
    onDeleteFileMp3,
    onDeleteFileWav,
    onDeleteFileZip,

    //images
    handleFileChangeImage,
    onDeleteFileImage,

    //video
    isVideoFile,
    handleFileChangeVideo,
    onDeleteFileVideo,
  };
}
