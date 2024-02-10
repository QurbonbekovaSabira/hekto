import React from "react";
import { HeroHome } from "./components/hero-home";
import { AboutHome } from "./components/about-home/about-home";
import { LeatestProduct } from "./components/leatest-product/leatest-product";
import { Offer } from "./components/offer";
export const Home = () => {
  return (
    <>
      <HeroHome />
      <AboutHome />
      <LeatestProduct />
      <Offer />
    </>
  );
};
