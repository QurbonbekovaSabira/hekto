import React from "react";
import logo from "../../../../assets/img/logo.png";
import { headerData } from "../../../../data/header-data";
import { InputBox } from "./components/input-box";
export const HeaderSecondBlock = () => {
  return (
    <div className="container flex items-center justify-between py-[22px]">
      <div className="flex items-end gap-[100px]">
        <img src={logo} alt="Logo Hekto" />
        <div className="flex gap-[35px]">
          {headerData?.map((item) => (
            <a
              href="#"
              key={item}
              className="text-deadly-depths text-base font-normal hover:text-secondary"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <InputBox />
    </div>
  );
};
