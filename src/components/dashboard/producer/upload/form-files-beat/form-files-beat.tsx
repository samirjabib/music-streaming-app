import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formFileBeat } from "@/components/dashboard/validators";
import {
  CombinedFormValues,
  FormFilesValues,
} from "../../types/form-validators-types";

import useFormUpload from "../hook/useFormUpload";

import FormUploadWav from "./form-input-wav";
import FormUploadMp3 from "./form-input-mp3";
import FormUploadZip from "./form-input-zip";

import { Button, Form } from "@/design-system";
import useFiles from "./hook/useFiles";
import FormInputKey from "./form-input-key";

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
      key: {
        key: formData.key.key,
        type: formData.key.type,
      },
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormFilesValues) => {
    setFormData((prev: CombinedFormValues) => ({ ...prev, ...data }));

    onHandleNext();
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-6 mb-12 ">
          {formData.fileMp3 ? (
            <div className="flex flex-row justify-between items-center">
              <p>{formData.fileMp3.name} Subido</p>
              <Button variant={"outline"} onClick={onDeleteFileMp3}>
                Cambiar
              </Button>
            </div>
          ) : (
            <FormUploadMp3 form={form} handleFileChange={handleFileChangeMp3} />
          )}
          <FormInputKey form={form} />

          {/* 
          {formData.fileWav ? (
            <div className="flex flex-row justify-between items-center">
              <p>{formData.fileWav.name}</p>
              <Button variant={"outline"} onClick={onDeleteFileWav}>
                Cambiar
              </Button>
            </div>
          ) : (
            <FormUploadWav form={form} handleFileChange={handleFileChangeWav} />
          )} */}
          {/* {formData.fileZip ? (
            <div className="flex flex-row justify-between items-center">
              <p>{formData.fileZip.name}</p>
              <Button variant={"outline"} onClick={onDeleteFileZip}>
                Cambiar
              </Button>
            </div>
          ) : (
            <FormUploadZip form={form} handleFileChange={handleFileChangeZip} />
          )} */}
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
