import React from "react";
import logo from "../../../../assets/img/logo.png";
import { headerData } from "../../../../data/header-data";
import { InputBox } from "./components/input-box";
import { Link } from "react-router-dom";
export const HeaderSecondBlock = () => {
  return (
    <div className="container flex items-center justify-between py-[22px]">
      <div className="flex items-end gap-[100px]">
        <img src={logo} alt="Logo Hekto" />
        <div className="flex gap-[35px]">
          {headerData?.map((item) => (
            <Link
              to={item.path}
              key={item.element}
              className="text-base font-normal text-deadly-depths hover:text-secondary"
            >
              {item.element}
            </Link>
          ))}
        </div>
      </div>
      <InputBox />
    </div>
  );
};
