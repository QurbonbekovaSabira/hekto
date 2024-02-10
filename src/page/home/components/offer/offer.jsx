import React from "react";
import { OfferCard } from "./components/offer-card";
import { offerData } from "../../../../data/offer-data";
export const Offer = () => {
  return (
    <section className="pb-[130px]">
      <div className="container">
        <h2 className="text-text-color mb-[60px] pt-[58px] text-center text-5xl font-bold">
          What Shopex Offer!
        </h2>
        <div className="flex items-center justify-between gap-[28px]">
          {offerData?.map((item) => (
            <OfferCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
