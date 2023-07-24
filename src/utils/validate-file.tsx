const isValidFileType =
  (validExtensions: string[]) =>
  (fileName: string): boolean => {
    const fileExtension = fileName.split(".").pop()?.toLowerCase();
    return !!fileExtension && validExtensions.includes(fileExtension);
  };

export default isValidFileType;
