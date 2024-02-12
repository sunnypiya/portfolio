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
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

interface Review {
  avatar: string;
  name: string;
  job: string;
  review: string;
}

const reviewData: Review[] = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Shyam Kumar",
    job: "Make-up artist",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam sequi ducimus nemo, qui nesciunt quaerat quas minus dolores. Ut maiores error fuga dignissimos odit voluptatem labore, asperiores placeat delectus.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Priya Shyam Kumar",
    job: "Make-up artist",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam sequi ducimus nemo, qui nesciunt quaerat quas minus dolores. Ut maiores error fuga dignissimos odit voluptatem labore, asperiores placeat delectus.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "John Doe",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam sequi ducimus nemo, qui nesciunt quaerat quas minus dolores. Ut maiores error fuga dignissimos odit voluptatem labore, asperiores placeat delectus.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Mason Wilson",
    job: "Video Editor",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam sequi ducimus nemo, qui nesciunt quaerat quas minus dolores. Ut maiores error fuga dignissimos odit voluptatem labore, asperiores placeat delectus.",
  },
];
const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* Slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewData.map((person: Review, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-teritary dark:bg-background/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        alt=""
                        width={70}
                        height={70}
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
