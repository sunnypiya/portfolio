"use client";
import React from "react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import reuired modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// components
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import Link from "next/link";
import { Button } from "./ui/button";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam sequi ducimus nemo, qui nesciunt quaerat quas minus dolores. Ut maiores error fuga dignissimos odit voluptatem labore, asperiores placeat delectus.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Lumina website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam sequi ducimus nemo, qui nesciunt quaerat quas minus dolores. Ut maiores error fuga dignissimos odit voluptatem labore, asperiores placeat delectus.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Evolve Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam sequi ducimus nemo, qui nesciunt quaerat quas minus dolores. Ut maiores error fuga dignissimos odit voluptatem labore, asperiores placeat delectus.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Iginite Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam sequi ducimus nemo, qui nesciunt quaerat quas minus dolores. Ut maiores error fuga dignissimos odit voluptatem labore, asperiores placeat delectus.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Social Network Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam sequi ducimus nemo, qui nesciunt quaerat quas minus dolores. Ut maiores error fuga dignissimos odit voluptatem labore, asperiores placeat delectus.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="div container mx-auto">
        {/* text */}
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] 
        flex flex-col justify-center items-center xl:items-start"
        >
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href={"/projects"}>
            <Button>All projects</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only first 4 projects for the slides */}
            {projectData.slice(0, 4).map((item: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={item} />
                  {item.name}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
