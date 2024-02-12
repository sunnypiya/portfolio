import React from "react";
import Socials from "./Socials";
const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary text-[20px] dark:text-white/70 hover:text-white dark:hove:text-primary transition-all"
            key={"social"}
          />
          {/* copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; SK Arya. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
