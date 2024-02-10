import React from "react";
import { Button } from "../../../../components/button";
export const HeroHome = () => {
  return (
    <section className="bg-foundation-white bg-[url(./assets/img/hero-homeBg.png)] bg-contain bg-left-top bg-no-repeat pb-[236px] pt-[203px]">
      <div className="container">
        <p className="mb-[16px] text-base font-bold text-secondary">
          Best Furniture For Your Castle....
        </p>
        <h1 className="mb-[16px] max-w-[50%] text-6xl font-bold">
          New Furniture Collection Trends in 2020
        </h1>
        <p className="text-soft-blue-lavender mb-[43px] max-w-[40%] text-base font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <Button type="button" variant="primary">
          Shop Now
        </Button>
      </div>
    </section>
  );
};
