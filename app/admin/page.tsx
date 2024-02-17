import React from "react";
import { auth, currentUser } from "@clerk/nextjs";
import { HomeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { getBasicInfo, getUserInfo } from "@/lib/actions/user.action";
import ContactForm from "@/components/ContactForm";
import BasicInfoForm from "@/components/admin/BasicInfoForm";
import { IBasicInfoProps } from "@/lib/actions/shared.types";
import { MyDrawer } from "@/components/MyDrawer";
import { Button } from "@/components/ui/button";

const AdminHome = async () => {
  const { userId } = auth();
  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();
  const { user: mongouser } = await getUserInfo({
    userId: "user_2X7pOs6IeFfxSIrJdiZyxjmGNTP",
  });
  const mongoBasicInfo: IBasicInfoProps = await getBasicInfo({
    userId: mongouser?._id,
  });

  return (
    <section className="container mx-auto">
      {/* text and Illustration */}
      <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary"></span>
            Welcom back 😊,
            <p className="font-bold">
              {/* {user?.firstName} -  */}
              {mongoBasicInfo?.fullName}
            </p>
          </div>
          <h1 className="h1 max-w-d mb-8">Manage you portfolio from here</h1>
          <p className="subtitle max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Button>
            <MyDrawer BasicInfoProps={mongoBasicInfo} />
          </Button>
        </div>
        {/* Illustration */}
        <div className="hidden xl:flex w-full bg-admin_multitasking_light dark:bg-admin_multitasking_dark bg-contain bg-top bg-no-repeat"></div>
      </div>
      {/* info text & form */}
      <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
        {/* info text */}
        <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base">
          {/* mail */}
          <div className="flex items-center gap-x-8">
            <MailIcon size={18} className="text-primary" />
            <div>{user?.emailAddresses[0].emailAddress}</div>
          </div>
          {/* address */}
          <div className="flex items-center gap-x-8">
            <HomeIcon size={18} className="text-primary" />
            <div>Budh Vihar, Badarpur Border New Delhi-44</div>
          </div>
          {/* home */}
          <div className="flex items-center gap-x-8">
            <PhoneIcon size={18} className="text-primary" />
            <div>+91-7048983960</div>
          </div>
        </div>

        {/* form */}
        <div>
          {/* <ContactForm mongouser={mongouser} /> */}
          <BasicInfoForm
            mongoUserId={mongouser?._id}
            basicInfo={mongoBasicInfo}
          />
        </div>
      </div>
    </section>
  );
};

export default AdminHome;
