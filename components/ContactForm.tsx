"use client";
import React from "react";
import { Input } from "./ui/input";
import {
  ArrowRightIcon,
  Mail,
  MessagesSquare,
  MessagesSquareIcon,
  User,
} from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const ContactForm = () => {
  return (
    <form>
      {/* Input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center mt-2">
        <Input type="email" id="email" placeholder="Email" />
        <Mail className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center mt-2">
        <Textarea
          id="description"
          name="description"
          placeholder="Type your message here..."
        />
        <MessagesSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex gap-x-1 items-center max-w-[166px] mt-2">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default ContactForm;
