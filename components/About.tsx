import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import DevImg from "./DevImg";
import Image from "next/image";

const infoData = [
  { icon: <User2 size={20} />, text: "Shyam Kumar" },
  { icon: <PhoneCall size={20} />, text: "+91-7048983960" },
  { icon: <MailIcon size={20} />, text: "contact@skarya.com" },
  { icon: <Calendar size={20} />, text: "13th of October" },
  { icon: <GraduationCap size={20} />, text: "Computer Science" },
  { icon: <HomeIcon size={20} />, text: "Delhi, India" },
];
const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Example University 1",
        qualification: "Bachelor of Science",
        years: "2015 - 2018",
      },
      {
        university: "Example University 2",
        qualification: "Bachelor of Science",
        years: "2015 - 2018",
      },
      {
        university: "Example University 3",
        qualification: "Bachelor of Science",
        years: "2015 - 2018",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "IASRI",
        role: "IT Professional",
        years: "2018 - 2020",
      },
      {
        company: "Virtual Employee",
        role: "Senior Software Engineer",
        years: "2020 - 2022",
      },
      {
        company: "Coforge",
        role: "Senior Fullstack Developer",
        years: "2022 - 2024",
      },
    ],
  },
];
const skillsData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS3, TailwindCss, ShadCnUI",
      },
      {
        name: "Javascript, ES6 and above",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Backend Development",
      },
      {
        name: "ReactJs, NextJs",
      },
      {
        name: "SQL(MS SQL, Postgey, MySQL) & NoSQL",
      },
      {
        name: "NoSQL(MongoDB, CosmosDB)",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
    ],
  },
];
const About = () => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 ">
      <div className="container mx-auto">
        <hr className="mt-5 mb-5"></hr>
        <h2 className="section-title mb-8 text-center xl:mb-16 mx-auto mt-10 xl:mt-2 md:mt-2">
          About me
        </h2>
        <div className="flex">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/me_Developer.png"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualification">Qualification </TabsTrigger>
                <TabsTrigger value="skills">Skills </TabsTrigger>
              </TabsList>
              {/* tab content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched service Quality for over 8 years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I speicalize in crafting intutitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences
                    </p>
                    {/* Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item) => {
                        return (
                          <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Languages */}

                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>English, Hindi, Sanskrit</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My awsome journey
                    </h3>
                    {/* Ecperience and Education warrper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experiences */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data?.map(
                            (item: any, index: number) => {
                              const { company, role, years } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data?.map(
                            (item: any, index: number) => {
                              const { qualification, university, years } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3  mb-8">What I Use Everyday</h3>
                    {/* Skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border"></div>
                      {/* skills list */}
                      <div>
                        {getData(skillsData, "skills").data.map(
                          (item: any, index: number) => {
                            const { name } = item;
                            return (
                              <div
                                key={index}
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border"></div>
                      {/* Tool list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillsData, "tools").data.map(
                          (item: any, index: number) => {
                            const { imgPath } = item;
                            return (
                              <div key={index} className="">
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt={`tool-${index}`}
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
