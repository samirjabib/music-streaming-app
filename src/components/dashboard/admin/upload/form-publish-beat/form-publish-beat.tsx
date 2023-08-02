import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formPublishBeat } from "@/components/dashboard/validators";
import {
  CombinedFormValues,
  FormPublishValues,
} from "../../types/form-validators-types";

import useFormUpload from "../hook/useFormUpload";

import { Button, Form } from "@/design-system";
import useFiles from "../form-files-beat/hook/useFiles";
import FormCovertArtInput from "./form-cover-art-input";
import FormVizualizerInput from "./form-vizualizer-input";
import FormTagInput from "./form-tags-input";
import { User } from "@supabase/auth-helpers-nextjs";
import {
  uploadCoverArt,
  uploadMp3,
  uploadWav,
} from "@/lib/db/types/mutations/beats";

export default function FormPublishBeat({ user }: { user: User | null }) {
  console.log(user, " user in form publish sheet");
  const { formData, onHandleBack, onHandleNext, setFormData, step } =
    useFormUpload();

  //write this better later, i think is for the type on default form
  const mp3File = formData.fileMp3;
  const user_id = user?.id;
  const wavFile = formData.fileWav;
  const coverArt = formData.coverArt;

  console.log(formData);

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
      tags: formData?.tags || [],
      // vizualizer: formData.vizualiser || "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormPublishValues) => {
    setFormData((prev: CombinedFormValues) => ({ ...prev, ...data }));

    //upload files to storage on supabase
    const filePathMp3 = await uploadMp3({ mp3File, user_id });
    const filePathWav = await uploadWav({ wavFile, user_id });
    const filePathCoverArt = await uploadCoverArt({ coverArt, user_id });
    console.log(filePathMp3);
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormCovertArtInput
          form={form}
          handleFileChange={handleFileChangeImage}
        />
        {/* <FormVizualizerInput
          form={form}
          handleFileChange={handleFileChangeVideo}
        /> */}
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
