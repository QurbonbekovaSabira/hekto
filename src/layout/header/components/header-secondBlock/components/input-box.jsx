import React from "react";
import { SearchIcon } from "../../../../../assets/icon/search-icon";
export const InputBox = () => {
  return (
    <div className="relative flex w-full max-w-[371px]">
      <input
        type="text"
        className="border-cool-frost w-full border-[2px] border-solid py-[8px] pl-[13px] pr-[60px] outline-cyber-lavender"
      />
      <button className="absolute right-0 top-0 h-full w-[51px]  bg-secondary ">
        <SearchIcon />
      </button>
    </div>
  );
};
