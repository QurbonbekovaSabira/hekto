import React from "react";
import img from "../../../../assets/img/discount-img.png";
import { TrueIcon } from "../../../../assets/icon/true-icon";
import { Button } from "../../../../components/button";
export const DiscountItem = () => {
  return (
    <section className="pt-[136px]">
      <div className="container">
        <h2 className="mb-[26px] text-center text-5xl font-bold text-text-color">
          Discount Item
        </h2>
        <div className="mb-[50px] flex justify-center gap-[26px]">
          <p className="flex items-center gap-[7px] border-b border-solid border-secondary pb-[1px] text-lg font-normal text-secondary">
            Wood Chair
            <span className="block h-[5px] w-[5px] rounded-full bg-secondary"></span>
          </p>
          <p>Plastic Chair</p>
          <p>Sofa Colletion</p>
        </div>
        <div className="flex items-center">
          <div>
            <h3 className="mb-[16px] text-4xl font-bold text-text-color">
              20% Discount Of All Products
            </h3>
            <p className="mb-[20px] text-xl font-normal text-secondary">
              Eams Sofa Compact
            </p>
            <p className="text-cosmic mb-[26px] w-full max-w-[90%] text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>

            <div className="mb-[37px] flex flex-wrap gap-[50px]">
              <div className="flex items-center gap-[8px]">
                <TrueIcon />
                <p className="text-wild-orchid-blue text-base font-normal">
                  Material expose like metals
                </p>
              </div>
              <div className="flex items-center gap-[8px]">
                <TrueIcon />
                <p className="text-wild-orchid-blue text-base font-normal">
                  Clear lines and geomatric figures
                </p>
              </div>
              <div className="flex items-center gap-[8px]">
                <TrueIcon />
                <p className="text-wild-orchid-blue text-base font-normal">
                  Simple neutral colours.
                </p>
              </div>
              <div className="flex items-center gap-[8px]">
                <TrueIcon />
                <p className="text-wild-orchid-blue text-base font-normal">
                  Material expose like metals
                </p>
              </div>
            </div>
            <Button variant="primary" type="button">
              Shop Now
            </Button>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
