"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";

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
const uniqueCategories: string[] = Array.from(
  new Set(projectData.map((item) => item.category))
);
// Adding 'all projects' as the first element
const categoriesWithAllProjects: string[] = [
  "all projects",
  ...uniqueCategories,
];

const Projects = () => {
  const [categories, setCategories] = useState(categoriesWithAllProjects);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categoriesWithAllProjects.map((category: any, index: number) => {
              return (
                <TabsTrigger
                  onClick={() => {
                    setCategory(category);
                  }}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                  value={category}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project: any, index: number) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
