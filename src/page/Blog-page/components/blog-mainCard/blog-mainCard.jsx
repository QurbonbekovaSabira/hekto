import React from "react";
import { CalendarIcon } from "../../../../assets/icon/calendar-icon";
import { PenIcon } from "../../../../assets/icon/pen-icon";
export const BlogMainCard = ({ name, date, title, text, img, link }) => {
  return (
    <div>
      <div className="mb-[27px]">
        <img src={img} alt={title} />
      </div>
      <div>
        <div className="mb-[28px] flex items-center gap-[25px]">
          <div className="flex items-center gap-[6px]">
            <PenIcon />
            <p>{name}</p>
          </div>
          <div className="flex items-center gap-[6px]">
            <CalendarIcon />
            <p>{date}</p>
          </div>
        </div>
        <h3 className="mb-[23px] text-3xl font-bold text-text-color">
          {title}
        </h3>
        <p className="mb-[30px] text-base font-normal text-soft-blue-lavender">
          {text}
        </p>
        <a
          href="#"
          className="flex items-center gap-[3px] text-lg font-semibold"
        >
          {link}{" "}
          <span className="block h-[5px] w-[5px] rounded-full bg-secondary"></span>
        </a>
      </div>
    </div>
  );
};
