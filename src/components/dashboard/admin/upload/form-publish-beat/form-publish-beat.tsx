import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formPublishBeat } from "@/components/dashboard/validators";
import { FormPublishValues } from "../../types/form-validators-types";

import useFormUpload from "../hook/useFormUpload";

import { Button, Form } from "@/design-system";
import useFiles from "../form-files-beat/hook/useFiles";
import FormCovertArtInput from "./form-cover-art-input";
import FormVizualizerInput from "./form-vizualizer-input";
import FormTagInput from "./form-tags-input";

export default function FormPublishBeat() {
  const { formData, onHandleBack, onHandleNext, setFormData, step } =
    useFormUpload();

  const {
    handleFileChangeImage,
    onDeleteFileImage,
    onDeleteFileVideo,
    handleFileChangeVideo,
  } = useFiles();

  const form = useForm<FormPublishValues>({
    resolver: zodResolver(formPublishBeat),
    defaultValues: {
      coverArt: formData?.coverArt || "",
      tags: formData?.tags || [""],
      vizualizer: formData.vizualiser || "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    console.log(data);
    // onHandleNext();
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormCovertArtInput
          form={form}
          handleFileChange={handleFileChangeImage}
        />
        <FormVizualizerInput
          form={form}
          handleFileChange={handleFileChangeVideo}
        />
        <FormTagInput form={form} />
        <div className="flex flex-row justify-end  w-full gap-2 ">
          <Button variant={"ghost"} onClick={onHandleBack}>
            Atras
          </Button>
          <Button type="submit">Publicar</Button>
        </div>
      </form>
    </Form>
  );
}
