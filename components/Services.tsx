"use client";
import React from "react";
import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Card,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum odio voluptatem, asperiores enim deserunt at dignissimos ducimus quos est saepe soluta minus vel? Quibusdam, vitae nisi eligendi eveniet veniam illum.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web App Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum odio voluptatem, asperiores enim deserunt at dignissimos ducimus quos est saepe soluta minus vel? Quibusdam, vitae nisi eligendi eveniet veniam illum.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Devlopment",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum odio voluptatem, asperiores enim deserunt at dignissimos ducimus quos est saepe soluta minus vel? Quibusdam, vitae nisi eligendi eveniet veniam illum.",
  },
];
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-24">
          {servicesData.map((item: any, index: number) => {
            return (
              <Card
                key={index}
                className="w-full max-w-[424px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
