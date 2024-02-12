import ContactForm from "@/components/ContactForm";
import { HomeIcon, MailIcon, PhoneIcon } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="container mx-auto">
      {/* text and Illustration */}
      <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary"></span>
            Say Hello 👋
          </div>
          <h1 className="h1 max-w-d mb-8">Let's Work Together.</h1>
          <p className="subtitle max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* Illustration */}
        <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
      </div>
      {/* info text & form */}
      <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
        {/* info text */}
        <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base">
          {/* mail */}
          <div className="flex items-center gap-x-8">
            <MailIcon size={18} className="text-primary" />
            <div>myemail@gmail.com</div>
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
