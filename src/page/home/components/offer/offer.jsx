import React from "react";
import { OfferCard } from "./components/offer-card";
import { offerData } from "../../../../data/offer-data";
export const Offer = () => {
  return (
    <section className="pb-[130px]">
      <div className="container">
        <h2 className="mb-[60px] pt-[58px] text-center text-5xl font-bold text-text-color">
          What Shopex Offer!
        </h2>
        <div className="flex items-center justify-between gap-[28px]">
          {offerData?.map((item, index) => (
            <OfferCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
