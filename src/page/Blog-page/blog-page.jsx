import React from "react";
import { HeroMain } from "../../components/hero-main";
import img from "../../assets/img/fashion.png";
import { blogAboutData } from "../../data/blog-data/blog-about-data";
import { BlogMainCard } from "./components/blog-mainCard/blog-mainCard";
export const BlogPage = () => {
  const [count, setCount] = React.useState(1);

  return (
    <>
      <HeroMain
        title="Blog Page"
        text="Home "
        text2="Pages"
        mainText="Blog Page"
      />
      <section className=" pt-[96px]">
        <div className="container flex gap-[58px]">
          <div className="w-full max-w-[870px]">
            <div className="mb-[77px]">
              {count === 1 &&
                blogAboutData
                  .slice(0, 3)
                  ?.map((item) => <BlogMainCard key={item.id} {...item} />)}
              {count === 2 &&
                blogAboutData
                  .slice(3, 6)
                  ?.map((item) => <BlogMainCard key={item.id} {...item} />)}
              {count === 3 &&
                blogAboutData
                  .slice(6, 9)
                  ?.map((item) => <BlogMainCard key={item.id} {...item} />)}
            </div>
            <div className="flex items-center justify-center gap-[20px]">
              <button
                className="rounded-sm border border-solid border-cyber-lavender px-[11px] py-[3px] text-base font-semibold text-cyber-lavender"
                onClick={() => setCount(1)}
              >
                1
              </button>
              <button
                className="rounded-sm border border-solid border-cyber-lavender px-[11px] pt-[3px] text-base font-semibold text-cyber-lavender"
                onClick={() => setCount(2)}
              >
                2
              </button>
              <button
                className="rounded-sm border border-solid border-cyber-lavender px-[11px] pt-[3px] text-base font-semibold text-cyber-lavender"
                onClick={() => setCount(3)}
              >
                3
              </button>
            </div>
          </div>
          <div>
            <h3 className="mb-[15px] text-xl font-semibold text-text-color">
              Search
            </h3>
            <input
              type="text"
              placeholder="Search For Posts"
              aria-label="Search For Posts"
              className="mb-[52px] w-full max-w-[270px] border border-solid border-cool-frost px-[10px] py-[12px]"
            />
            <p className="mb-[25px] text-xl font-semibold text-text-color">
              Categories
            </p>
          </div>
        </div>
      </section>
      <section className="pb-[60px] pt-[77px]">
        <div className="container flex justify-center">
          <img src={img} alt="img" />
        </div>
      </section>
    </>
  );
};
