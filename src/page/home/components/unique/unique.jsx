import React from "react";
import img from "../../../../assets/img/unique-img.png";
import { Button } from "../../../../components/button";
export const Unique = () => {
  return (
    <section className="bg-brilliant-white py-[15px]">
      <div className="container flex items-center">
        <div className="ml-[50px]">
          <img
            src={img}
            alt="Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs"
          />
        </div>
        <div>
          <h2 className="mb-[29px] max-w-[70%] text-4xl font-bold text-text-color">
            Unique Features Of leatest & Trending Poducts
          </h2>
          <div className="mb-[13px] flex items-center gap-[12px]">
            <span className="block h-[11px] w-[11px] rounded-full bg-secondary"></span>
            <p className="text-cosmic-sky text-base font-medium">
              All frames constructed with hardwood solids and laminates
            </p>
          </div>
          <div className="mb-[13px] flex items-center gap-[12px]">
            <span className="bg-system-shock-blue block h-[11px] w-[11px] rounded-full"></span>
            <p className="text-cosmic-sky text-base font-medium">
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </p>
          </div>
          <div className="mb-[42px] flex items-center gap-[12px]">
            <span className="block h-[11px] w-[11px] rounded-full bg-ice-climber"></span>
            <p className="text-cosmic-sky text-base font-medium">
              Arms, backs and seats are structurally reinforced
            </p>
          </div>
          <div className="flex items-center gap-[19px]">
            <Button
              type="button"
              variant="primary"
              classname="py-[14px] px-[24px]"
            >
              Add To Cart
            </Button>
            <div>
              <p className="mb-[3px] text-sm font-semibold text-text-color">
                B&B Italian Sofa{" "}
              </p>
              <p className="text-sm font-normal text-text-color">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
