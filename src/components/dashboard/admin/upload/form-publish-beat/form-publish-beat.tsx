import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import uniqid from "uniqid";

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
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";

export default function FormPublishBeat({ user }: { user: User | null }) {
  console.log(user, " user in form publish sheet");
  const { formData, onHandleBack, onHandleNext, setFormData, step } =
    useFormUpload();

  const supabase = createClientComponentClient();

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

  const onSubmit = async (data: FormPublishValues) => {
    setFormData((prev: CombinedFormValues) => ({ ...prev, ...data }));
    try {
      console.log(formData, " this is the form data");
      console.log(user, " user in publish beat");
      const uniqueID = uniqid();
      const { data: fileMp3Data, error: fileMp3Error } = await supabase.storage
        .from("beats/mp3")
        .upload(
          `beat.mp3-${formData.beatname}-${user?.id}-${uniqueID}`,
          formData.fileMp3
        );
        console.log(fileMp3Data)
        console.log(fileMp3Error)
    } catch (error) {
      console.log(error);
    }
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
