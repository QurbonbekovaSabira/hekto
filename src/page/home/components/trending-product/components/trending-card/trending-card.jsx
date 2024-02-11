import React from "react";

export const TrendingCard = ({ img, salePrice, oldPrice, text }) => {
  return (
    <div className="bg-white text-center shadow-lg  shadow-cool-frost">
      <div className=" px-[12px] pt-[11px] ">
        <img src={img} alt={text} />
      </div>
      <div className="pb-[32px] pt-[15px] ">
        <p className="mb-[8px] text-base font-bold text-text-color">{text}</p>
        <div className="flex items-center justify-center gap-[12px]">
          <p className="text-sm font-normal text-text-color">{salePrice}</p>
          <p className="text-xs font-normal text-space-colonization">
            {oldPrice}
          </p>
        </div>
      </div>
    </div>
  );
};
