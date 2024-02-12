import React from "react";
import { HeroHome } from "./components/hero-home";
import { AboutHome } from "./components/about-home/about-home";
import { LeatestProduct } from "./components/leatest-product/leatest-product";
import { Offer } from "./components/offer";
import { Unique } from "./components/unique";
import { TrendingProduct } from "./components/trending-product";
import { DiscountItem } from "./components/discount-item";
import { TopCategories } from "./components/top-categories";
import { Newslater } from "./components/newslater";
import img from "../../assets/img/fashion.png";
export const Home = () => {
  return (
    <>
      <HeroHome />
      <AboutHome />
      <LeatestProduct />
      <Offer />
      <Unique />
      <TrendingProduct />
      <DiscountItem />
      <TopCategories />
      <Newslater />
      <section className="pb-[96px] pt-[96px]">
        <div className="container ">
          <img
            className="mx-auto w-full max-w-[74%]"
            src={img}
            alt="fashions"
          />
        </div>
      </section>
    </>
  );
};
