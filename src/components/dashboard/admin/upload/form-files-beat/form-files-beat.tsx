import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formFileBeat } from "@/components/dashboard/validators";
import { FormFilesValues } from "../../types/form-validators-types";

import useFormUpload from "../hook/useFormUpload";

import FormUploadWav from "./form-input-wav";
import FormUploadMp3 from "./form-input-mp3";
import FormUploadZip from "./form-input-zip";

import { Button, Form } from "@/design-system";
import useFiles from "./hook/useFiles";

export default function FormFilesBeat() {
  const { formData, onHandleBack, onHandleNext, setFormData, step } =
    useFormUpload();

  const {
    handleFileChangeMp3,
    handleFileChangeWav,
    handleFileChangeZip,
    onDeleteFileMp3,
    onDeleteFileWav,
    onDeleteFileZip,
  } = useFiles();

  const form = useForm<FormFilesValues>({
    resolver: zodResolver(formFileBeat),
    defaultValues: {
      fileMp3: formData.fileMp3,
      fileWav: formData.fileWav,
      fileZip: formData.fileZip,
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormFilesValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));

    onHandleNext();
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4 ">
          {formData.fileMp3 ? (
            <div className="flex flex-row justify-between">
              <p>{formData.fileMp3.name} Subido</p>
              <Button variant={"ghost"} onClick={onDeleteFileMp3}>
                Eliminar
              </Button>
            </div>
          ) : (
            <FormUploadMp3 form={form} handleFileChange={handleFileChangeMp3} />
          )}

          {formData.fileWav ? (
            <div className="flex flex-row justify-between">
              <p>{formData.fileWav.name}</p>
              <Button variant={"ghost"} onClick={onDeleteFileWav}>
                Eliminar
              </Button>
            </div>
          ) : (
            <FormUploadWav form={form} handleFileChange={handleFileChangeWav} />
          )}
          {formData.fileZip ? (
            <div className="flex flex-row justify-between">
              <p>{formData.fileZip.name}</p>
              <Button variant={"ghost"} onClick={onDeleteFileZip}>
                Eliminar
              </Button>
            </div>
          ) : (
            <FormUploadZip form={form} handleFileChange={handleFileChangeZip} />
          )}
        </div>

        <div className="flex flex-row justify-end  w-full gap-2 ">
          <Button variant={"ghost"} onClick={onHandleBack}>
            Atras
          </Button>
          <Button type="submit">Siguiente</Button>
        </div>
      </form>
    </Form>
  );
}
