import React from "react";
import Image from "next/image";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSFill,
  RiArrowDownSLine,
  RiBriefcase2Fill,
} from "react-icons/ri";
import { Button } from "@/components/ui/button";
import DevImg from "../components/DevImg";
import Badge from "../components/Badge";
import Socials from "../components/Socials";
import Link from "next/link";
import { IBasicInfoProps } from "@/lib/actions/shared.types";

interface HeroCardProps {
  basicInfo: IBasicInfoProps | null;
}
const Hero = (props: HeroCardProps) => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero  bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web App Developer
            </div>
            <h1 className="h1">
              Hello, my name is {props?.basicInfo?.fullName}
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              {props?.basicInfo?.description}
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant={"secondary"} className="gap-x-2">
                Download <Download size={18} />
              </Button>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              badgeText="Years Of Experience"
              containerStyles="absolute top-[24%] -left-[5rem]"
              endCountNum={8}
              endCountText=""
              icon={<RiBriefcase2Fill />}
              key={"2"}
            />
            {/* badge 2 */}
            <Badge
              badgeText="Finished Projects"
              containerStyles="absolute top-[80%] -left-[1rem]"
              endCountNum={25}
              endCountText=""
              icon={<RiTodoFill />}
              key={"2"}
            />
            {/* badge 3 */}
            <Badge
              badgeText="Happy Clients"
              containerStyles="absolute top-[70%] -right-8"
              endCountNum={9}
              endCountText="k"
              icon={<RiTeamFill />}
              key={"2"}
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/me_Developer.png"
              key={"imgDev"}
            />
          </div>
        </div>
        {/* icon */}
        <div>
          <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
