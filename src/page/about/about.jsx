import React from "react";
import { useParams } from "react-router-dom";
import { homeAboutData } from "../../data/home-about-data";
import { StarIcon } from "../../assets/icon/star-icon";
export const About = () => {
  const { id } = useParams();
  const product = homeAboutData?.find((item) => item.id == id);
  return (
    <>
      <section className="bg-sugar-crystal pb-[126px] pt-[96px]">
        <div className="container">
          <h2 className="mb-[9px] text-4xl font-bold text-text-color">
            Product Details
          </h2>
          <div className="flex items-center">
            <p className="text-base font-medium text-black">Home .</p>
            <p className="text-base font-medium text-black">Pages</p>
            <p className="text-base font-medium text-secondary">
              Product Details
            </p>
          </div>
        </div>
      </section>
      <section className="pb-[140px] pt-[96px]">
        <div className="container grid grid-cols-2">
          <div className="flex grow items-center gap-[21px]">
            <div className="flex w-full  max-w-[151px] flex-col gap-[11px]">
              <img
                className="h-[155px] border border-solid border-space-colonization"
                src={product.img}
                alt={product.title}
              />
              <img
                className="h-[155px] border border-solid border-space-colonization"
                src={product.img}
                alt={product.title}
              />
              <img
                className="h-[155px] border border-solid border-space-colonization"
                src={product.img}
                alt={product.title}
              />
            </div>
            <div className="h-[475px] w-full max-w-[375px] border border-solid border-space-colonization">
              <img className="w-full" src={product.img} alt={product.title} />
            </div>
          </div>
          <div>
            <h2 className="mb-[15px] text-3xl font-semibold text-text-color">
              {product.title}
            </h2>
            <div className="mb-[26px] flex items-center gap-[5px]">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <p className="text-sm font-normal text-text-color">(22)</p>
            </div>
            <div className="mb-[26px] flex gap-[18px]">
              <p className="text-sm font-medium text-text-color">
                ${product.price}
              </p>
              <p className="text-sm font-medium text-secondary line-through">
                ${product.price}
              </p>
            </div>
            <p className="text-shadowdancer mb-[]16px text-base font-semibold">
              Color
            </p>
            <p className="text-cosmic-sky-light mb-[34px] text-base font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
            <p className="ml-[71px] text-base font-normal text-text-color">
              Add To cart
            </p>
            <p className="mb-[10px] text-base font-semibold text-text-color">
              Categories:
            </p>
            <p className="mb-[10px] text-base font-semibold text-text-color">
              Tags
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
