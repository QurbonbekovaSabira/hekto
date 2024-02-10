import React from "react";
import clsx from "clsx";
export const Button = ({
  children,
  type,
  variant,
  //   onclick,
  beforeIcon: BeforeIcon,
  afterIcon: AfterIcon,
  classname,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "border-none text-base font-semibold",
        {
          "bg-secondary px-[40px] py-[16px] text-white": variant === "primary",
        },
        { "bg-alienated px-[12px] py-[5px] text-white": variant === "green" },
        classname,
      )}
    >
      {BeforeIcon && <BeforeIcon />}
      {children}
      {AfterIcon && <AfterIcon />}
    </button>
  );
};
