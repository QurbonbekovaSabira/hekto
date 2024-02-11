import React from "react";

export const TrendingSaleCard = ({ img, title, price }) => {
  return (
    <div className="flex items-center gap-[9px]">
      <div className="bg-grams-hair px-[22px] pt-[3px] pb-[3px] text-center">
        <img src={img} alt={title} />
      </div>
      <div className="">
        <p className="mb-[5px] text-base font-semibold text-text-color">
          {title}
        </p>
        <p className="text-sm font-normal text-text-color line-through">
          {price}
        </p>
      </div>
    </div>
  );
};
