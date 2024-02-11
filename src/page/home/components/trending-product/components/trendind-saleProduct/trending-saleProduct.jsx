import React from "react";
import clsx from "clsx";
export const TrendingSaleProduct = ({ title, href, link, url, variant }) => {
  return (
    <div
      className={clsx(
        "h-[270px] w-full max-w-[420px] overflow-hidden pl-[25px] pt-[34px]",
        { " bg-cold-snow": variant === "primary" },
        { " bg-brilliant-white": variant === "secondary" },
      )}
    >
      <div>
        <p className="mb-[11px] text-2xl font-semibold text-text-color">
          {title}
        </p>
        <a
          className="border-b  border-solid border-secondary pb-[2px] text-base font-semibold text-secondary"
          href={href}
        >
          {link}
        </a>
      </div>
      <div className="ml-[50px] ">
        <img src={url} alt="" />
      </div>
    </div>
  );
};
