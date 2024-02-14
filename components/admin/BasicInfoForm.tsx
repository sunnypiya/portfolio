"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import React, { useRef } from "react";
// import { Editor } from "@tinymce/tinymce-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { BasicInfoFormSchema } from "@/lib/validations";
import { usePathname, useRouter } from "next/navigation";
import { addUpdateBasicInfo } from "@/lib/actions/user.action";
import { revalidatePath } from "next/cache";
import { IBasicInfoProps } from "@/lib/actions/shared.types";

const type: any = "create";
interface Props {
  mongoUserId: string;
  basicInfo: IBasicInfoProps;
}
const BasicInfoForm = ({ mongoUserId, basicInfo }: Props) => {
  const editorRef = useRef(null);
  const [isSubmtting, SetIsSubmtting] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  // 1. Defining the form.
  const form = useForm<z.infer<typeof BasicInfoFormSchema>>({
    resolver: zodResolver(BasicInfoFormSchema),
    defaultValues: {
      fullName: basicInfo?.fullName,
      description: basicInfo?.description,
      noOfClients: "",
      noOfProjects: "",
      yearOfExpirence: "",
    },
  });
  async function onSubmit(values: z.infer<typeof BasicInfoFormSchema>) {
    try {
      SetIsSubmtting(true);
      const isSuccess = await addUpdateBasicInfo({
        userId: mongoUserId,
        fullName: values.fullName,
        description: values?.description,
        noOfClients: "2",
        noOfProjects: "1",
        yearOfExpirence: "8",
        path: pathname,
      });
      if (isSuccess) {
        form.reset();
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      SetIsSubmtting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Full Name<span className="text-primary-500"> *</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  {...field}
                  className="no-focus paragrap-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Provide your full Name, This will be visible on your portfolio's
                home page
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                About me<span className="text-primary-500"> *</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  {...field}
                  className="no-focus paragrap-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Be specific and imagine about you and type.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="primary-gradient w-fit !text-light-900"
          disabled={isSubmtting}
        >
          {isSubmtting ? (
            <>{type === "edit" ? "Editing..." : "Updating..."}</>
          ) : (
            <>{type === "edit" ? "Edit Question" : "Update"}</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default BasicInfoForm;
