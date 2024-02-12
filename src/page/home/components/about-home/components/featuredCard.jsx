import React from "react";
import { ProductCardIcon } from "../../../../../assets/icon/productCard-icon";
import { ProductLikeIcon } from "../../../../../assets/icon/productLike-icon";
import { ProductSearchIcon } from "../../../../../assets/icon/productSearch-icon";
import { Button } from "../../../../../components/button";
import { Link } from "react-router-dom";
export const FeaturedCard = ({ id, img, code, title, price }) => {
  return (
    <div className="group relative overflow-hidden transition delay-150 duration-700 ease-in-out">
      <div className="relative flex h-[236px] w-full justify-center bg-mā-white pt-[46px] group-hover:bg-lynx-white">
        <img className="group-hover:scale-75 " src={img} alt="" />
        <Link to={`/product/${id}`}>
          <Button
            classname="hidden left-[75px] group-hover:flex  absolute bottom-[5px] group-hover:transition group-hover:delay-150 group-hover:duration-700 group-hover:ease-in-out"
            type="button"
            variant="green"
          >
            View Details
          </Button>
        </Link>
      </div>
      <div className="absolute left-[11px]   top-[11px] hidden items-center  gap-[8px] group-hover:flex">
        <a
          href="#"
          className="flex  h-[30px] w-[30px] justify-center rounded-full bg-transparent text-huelveño-horizon hover:items-center hover:bg-brilliant-white hover:text-galactic-highway"
        >
          <ProductCardIcon />
        </a>
        <a
          href="#"
          className="flex h-[30px] w-[30px] justify-center rounded-full bg-transparent text-huelveño-horizon hover:items-center hover:bg-brilliant-white hover:text-galactic-highway"
        >
          <ProductLikeIcon />
        </a>
        <a
          href="#"
          className="flex h-[30px] w-[30px] justify-center rounded-full bg-transparent text-huelveño-horizon hover:items-center hover:bg-brilliant-white hover:text-galactic-highway"
        >
          <ProductSearchIcon />
        </a>
      </div>

      <div className="px-[73px] pb-[17px] pt-[15px] text-center group-hover:bg-galactic-highway group-hover:transition group-hover:delay-150 group-hover:duration-700 group-hover:ease-in-out">
        <p className="mb-[12px] text-lg font-bold text-secondary">{title}</p>
        <div className="mb-[13px] flex justify-center gap-[5px] text-center">
          <span className="block h-[4px] w-[14px] rounded-xl bg-lifeless-green "></span>
          <span className="block h-[4px] w-[14px] rounded-xl bg-fashion-fuchsia "></span>
          <span className="block h-[4px] w-[14px] rounded-xl bg-duke-blue group-hover:bg-urnebes-beige "></span>
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
