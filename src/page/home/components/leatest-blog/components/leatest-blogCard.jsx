import React from "react";
import { PenIcon } from "../../../../../assets/icon/pen-icon";
import { CalendarIcon } from "../../../../../assets/icon/calendar-icon";
export const LeatestBlogCard = ({
  img,
  name,
  data,
  title,
  text,
  link,
  href,
}) => {
  return (
    <div className="group bg-white shadow-md ">
      <div>
        <img className="rounded-lg" src={img} alt={text} />
      </div>
      <div className="pb-[35px] pl-[14px] pt-[19px]">
        <div className="mb-[31px] flex items-center gap-[30px]">
          <div className="flex items-center gap-[8px]">
            <PenIcon />
            <p className="text-sm font-normal text-text-color">{name}</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <CalendarIcon />
            <p className="text-sm font-normal text-text-color">{data}</p>
          </div>
        </div>
        <p className="mb-[17px] text-lg font-bold text-text-color transition-all delay-500 duration-75 ease-linear group-hover:text-secondary">
          {title}
        </p>
        <p className="text-stormy-mauve mb-[14px] text-base font-normal">
          {text}
        </p>
        <a
          className="text-base font-normal text-text-color underline transition-all delay-500 duration-75 ease-linear group-hover:text-secondary"
          href={href}
        >
          {link}
        </a>
      </div>
    </div>
  );
};
