import React from "react";
import { ProductCardIcon } from "../../../../../assets/icon/productCard-icon";
import { ProductLikeIcon } from "../../../../../assets/icon/productLike-icon";
import { ProductSearchIcon } from "../../../../../assets/icon/productSearch-icon";
import { Button } from "../../../../../components/button";
export const FeaturedCard = ({ img, code, title, price }) => {
  return (
    <div className="group relative overflow-hidden transition delay-150 duration-700 ease-in-out">
      <div className="bg-mā-white group-hover:bg-lynx-white relative flex h-[236px] w-full justify-center pt-[46px]">
        <img className="group-hover:scale-75 " src={img} alt="" />
        <Button
          type="button"
          variant="green"
          classname="hidden group-hover:block absolute bottom-[9px] group-hover:transition group-hover:delay-150 group-hover:duration-700 group-hover:ease-in-out"
        >
          View Details
        </Button>
      </div>
      <div className="absolute left-[11px]   top-[11px] hidden items-center  gap-[8px] group-hover:flex">
        <a
          href="#"
          className="text-huelveño-horizon  hover:bg-brilliant-white flex h-[30px] w-[30px] justify-center rounded-full bg-transparent hover:items-center hover:text-galactic-highway"
        >
          <ProductCardIcon />
        </a>
        <a
          href="#"
          className="text-huelveño-horizon hover:bg-brilliant-white flex h-[30px] w-[30px] justify-center rounded-full bg-transparent hover:items-center hover:text-galactic-highway"
        >
          <ProductLikeIcon />
        </a>
        <a
          href="#"
          className="text-huelveño-horizon hover:bg-brilliant-white flex h-[30px] w-[30px] justify-center rounded-full bg-transparent hover:items-center hover:text-galactic-highway"
        >
          <ProductSearchIcon />
        </a>
      </div>

      <div className="px-[73px] pb-[17px] pt-[15px] text-center group-hover:bg-galactic-highway group-hover:transition group-hover:delay-150 group-hover:duration-700 group-hover:ease-in-out">
        <p className="mb-[12px] text-lg font-bold text-secondary">{title}</p>
        <div className="mb-[13px] flex justify-center gap-[5px] text-center">
          <span className="bg-lifeless-green block h-[4px] w-[14px] rounded-xl "></span>
          <span className="bg-fashion-fuchsia block h-[4px] w-[14px] rounded-xl "></span>
          <span className="bg-duke-blue group-hover:bg-urnebes-beige block h-[4px] w-[14px] rounded-xl "></span>
        </div>
        <p className="mb-[12px] text-sm font-normal text-text-color">
          Code - {code}
        </p>
        <p className="mb-[12px] text-sm font-normal text-text-color">
          ${price}
        </p>
      </div>
    </div>
  );
};
