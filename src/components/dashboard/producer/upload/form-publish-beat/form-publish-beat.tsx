import toast from "react-hot-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formPublishBeat } from "@/components/dashboard/validators";
import {
  BeatDataPayload,
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
  uploadBeat,
  uploadCoverArt,
  uploadMp3,
} from "@/lib/db/types/mutations/beats";
import { useState } from "react";
import FormInputLicenses from "./form-input-licenses";
import { date } from "zod";

export default function FormPublishBeat({
  user,
  producer_id,
}: {
  user: User | null;
  producer_id: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { formData, onHandleBack, onHandleNext, setFormData, step } =
    useFormUpload();


    console.log(formData)

  //write this better later, i think is for the type on default form
  const file_mp3 = formData.fileMp3;
  const user_id = user?.id as string;
  const cover_art = formData.coverArt;

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
      basic: formData?.basic || "",
    },
    mode: "onChange",
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: FormPublishValues) => {
    setFormData((prev: CombinedFormValues) => ({ ...prev, ...data }));

    const beatData: BeatDataPayload = {
      beatname: formData.beatname,
      bpm: formData.bpm,
      genre: formData.genre,
      tags: data.tags,
      license_basic: data.basic,
      key: {
        key: formData.key.key,
        type: formData.key.type,
      },
    };

    toast.promise(uploadBeat({ user_id, beatData, file_mp3, cover_art:data.coverArt }), {
      loading: "Creando beat...",
      success: () => {
        return "Beat creado con exito 🥳";
      },
      error: (err) => {
        return `${err.toString()}`;
      },
    });

    // fetch("/api/revalidate?path=/dashboard/producer");
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormCovertArtInput
          form={form}
          handleFileChange={handleFileChangeImage}
        />
        <FormInputLicenses form={form} />
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
