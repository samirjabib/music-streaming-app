import toast from "react-hot-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formPublishBeat } from "@/components/dashboard/validators";
import {
  CombinedFormValues,
  FormPublishValues,
} from "../../types/form-validators-types";

import useFormUpload from "../hook/useFormUpload";

import { Button, Form, Icons } from "@/design-system";
import useFiles from "../form-files-beat/hook/useFiles";
import FormCovertArtInput from "./form-cover-art-input";
// import FormVizualizerInput from "./form-vizualizer-input";
import FormTagInput from "./form-tags-input";
import { User } from "@supabase/auth-helpers-nextjs";
import {
  uploadCoverArt,
  uploadMp3,
  uploadWav,
} from "@/lib/db/types/mutations/beats";
import { Beats } from "@/lib/db/types/collections";
import { useState } from "react";

export default function FormPublishBeat({
  user,
  producer_id,
}: {
  user: User | null;
  producer_id: string;
}) {
  console.log(user, " user in form publish sheet");

  const [isLoading, setIsLoading] = useState(false);
  const { formData, onHandleBack, onHandleNext, setFormData, step } =
    useFormUpload();

  //write this better later, i think is for the type on default form
  const mp3File = formData.fileMp3;
  const user_id = user?.id;
  const wavFile = formData.fileWav;
  const coverArt = formData.coverArt;

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

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: FormPublishValues) => {
    setFormData((prev: CombinedFormValues) => ({ ...prev, ...data }));

    //upload files to storage on supabase
    const filePathMp3 = await uploadMp3({ mp3File, user_id, producer_id });
    const filePathWav = await uploadWav({ wavFile, user_id });
    const filePathCoverArt = await uploadCoverArt({ coverArt, user_id });

    //validate responses exists
    if (!filePathCoverArt && !filePathMp3 && !filePathWav) {
      return alert("Hubo un problema subiendo las imagenes");
    }

    const BEAT: any = {
      beatname: formData.beatname,
      bpm: formData.bpm,
      category_id: "",
      file_mp3: filePathMp3,
      // file_wav: filePathWav,
      tags: "",
      license_id: "",
      id: "",
      user_id: "",
    };

    // toast.promise(upsertModel({ formData, user_id }), {
    //   loading: formData ? "Actualizando modelo..." : "Creando modelo...",
    //   success: () => {
    //     return "Beat creado con exito 🥳";
    //   },
    //   error: (err) => {
    //     return `${err.toString()}`;
    //   },
    // });

    fetch("/api/revalidate?path=/dashboard/admin");
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
          <Button disabled={isLoading || isSubmitting} type="submit">
            {!!isSubmitting && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            <>Subir cambios</>
          </Button>
        </div>
      </form>
    </Form>
  );
}
