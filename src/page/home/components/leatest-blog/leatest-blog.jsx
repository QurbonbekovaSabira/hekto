import React from "react";
import { leatestBlogData } from "../../../../data/leatest-blog-data";
import { LeatestBlogCard } from "./components/leatest-blogCard";

export const LeatestBlog = () => {
  return (
    <section className="pb-[115px] pt-[86px]">
      <div className="container">
        <h2 className="mb-[80px] text-center text-5xl font-bold text-text-color">
          Leatest Blog
        </h2>
        <div className="flex items-center justify-between gap-[56px]">
          {leatestBlogData?.map((item, index) => (
            <LeatestBlogCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
