import React from "react";
import { Button } from "../../../../../components/button";
export const TopCategoriesCard = ({ img, text, price }) => {
  return (
    <div className="group">
      <div className="hover:border-matt-purple relative flex h-[269px]  w-full max-w-[269px] flex-col items-center justify-center rounded-full border-l-8 border-solid border-transparent bg-mā-white transition-all delay-100 duration-100 ease-linear ">
        <img
          className="text-center group-hover:scale-95"
          src={img}
          alt={text}
        />
        <Button
          type="button"
          variant="green"
          classname="hidden group-hover:block"
        >
          View Shop
        </Button>
      </div>
      <p className="text-center text-xl font-normal text-text-color">{text}</p>
      <p className="text-center text-base font-normal text-text-color">
        {price}
      </p>
    </div>
  );
};
