import React from "react";

export const OfferCard = ({ icon: Icon, text, title }) => {
  return (
    <div className="shadow-cool-frost bg-white px-[27px] pb-[45px] pt-[61px] text-center shadow-md">
      <div className="mb-[22px] flex justify-center">{Icon && <Icon />}</div>
      <p className="mb-[22px] text-xl font-semibold text-text-color">{title}</p>
      <p className="text-space-colonization text-base font-semibold">{text}</p>
    </div>
  );
};
