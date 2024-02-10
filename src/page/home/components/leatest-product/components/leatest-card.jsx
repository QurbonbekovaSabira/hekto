import React from "react";
import saleImg from "../../../../../assets/img/sale-img.png";
import { ProductCardIcon } from "../../../../../assets/icon/productCard-icon";
import { ProductLikeIcon } from "../../../../../assets/icon/productLike-icon";
import { ProductSearchIcon } from "../../../../../assets/icon/productSearch-icon";

export const LeatestCard = ({ img, oldPrice, salePrice, text }) => {
  return (
    <div className="group w-full max-w-[306px]  overflow-hidden ">
      <div className="bg-lynx-white relative h-[270px] py-[20px] max-w-[360px] overflow-hidden">
        <img
          className="flex w-[80%]  transition-all duration-700 group-hover:scale-75"
          src={img}
          alt=""
        />
        <img
          className="absolute left-[8px] top-[5px] hidden group-hover:block"
          src={saleImg}
          alt="sale img"
        />
        <div className="absolute bottom-[30px] left-[8px] hidden gap-[5px] group-hover:flex group-hover:flex-col">
          <a
            className="hover:bg-brilliant-white flex h-[30px] w-[30px]  items-center  justify-center text-text-color hover:rounded-full"
            href="#"
          >
            <ProductCardIcon />
          </a>
          <a
            className="hover:bg-brilliant-white flex h-[30px]  w-[30px]  items-center justify-center rounded-full text-text-color"
            href="#"
          >
            <ProductLikeIcon />
          </a>
          <a
            className="hover:bg-brilliant-white flex h-[30px]  w-[30px] items-center justify-center rounded-full text-text-color"
            href="#"
          >
            <ProductSearchIcon />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between pb-[5px] pt-[15px]">
        <p className="text-base font-normal text-text-color">{text}</p>
        <div className="flex items-center gap-[10px]">
          <p className="text-sm font-normal text-text-color">{salePrice}</p>
          <p className="text-xs font-normal text-secondary line-through">
            {oldPrice}
          </p>
        </div>
      </div>
    </div>
  );
};
