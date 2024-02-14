import React from "react";

export const HeroMain = ({ title, text, text2, mainText }) => {
  return (
    <section className="bg-sugar-crystal pb-[126px] pt-[96px]">
      <div className="container">
        <h2 className="text-shadowdancer-block mb-[9px] text-4xl font-bold">
          {title}
        </h2>
        <div className="flex items-center">
          <p className="text-base font-normal text-black">{text} .</p>
          <p className="text-base font-normal text-black">{text2}</p>
          <p className="text-base font-normal text-secondary">. {mainText}</p>
        </div>
      </div>
    </section>
  );
};
