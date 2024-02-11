import React from "react";
import { TrendingCard } from "./components/trending-card";
import { trendingData } from "../../../../data/trending-data";
import { trendingSaleProductData } from "../../../../data/trending-saleProduct-data";
import { TrendingSaleProduct } from "./components/trendind-saleProduct";
import { trendingSaleCardData } from "../../../../data/trending-saleCard-data";
import { TrendingSaleCard } from "./components/trending-saleCard";

export const TrendingProduct = () => {
  return (
    <section className="pt-[132px]">
      <div className="container">
        <h2 className="mb-[40px] text-center text-5xl font-bold text-text-color">
          Trending Products
        </h2>
        <div className="mb-[29px] flex gap-[29px]">
          {trendingData?.map((item) => (
            <TrendingCard key={item.id} {...item} />
          ))}
        </div>
        <div className="flex items-center gap-[29px]">
          <div className="flex w-full max-w-[70%] grow items-center gap-[29px]">
            {trendingSaleProductData?.map((item) => (
              <TrendingSaleProduct key={item.id} {...item} />
            ))}
          </div>
          <div className="flex flex-col gap-[20px] ">
            {trendingSaleCardData?.map((item) => (
              <TrendingSaleCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
