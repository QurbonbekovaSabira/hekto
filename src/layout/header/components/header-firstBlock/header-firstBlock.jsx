import React from "react";
import { MessageIcon } from "../../../../assets/icon/message-icon";
import { PhoneHeaderIcon } from "../../../../assets/icon/phoneHeader-icon";
import { UserHeader } from "../../../../assets/icon/userHeader";
import { LikeHeaderIcon } from "../../../../assets/icon/likeHeader-icon";
import { CardHeaderIcon } from "../../../../assets/icon/cardHeader-icon";
export const HeaderFirstBlock = () => {
  return (
    <div className="bg-primary py-[15px]">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-[50px]">
          <a
            href="mail:mhhasanul@gmail.com"
            className="flex items-center gap-[11px] text-base font-semibold text-white"
          >
            <MessageIcon />
            mhhasanul@gmail.com
          </a>
          <a
            href="tel:(12345)67890"
            className="flex items-center gap-[13px] text-base font-semibold text-white"
          >
            <PhoneHeaderIcon />
            (12345)67890
          </a>
        </div>
        <div className="flex items-center gap-[12px]">
          <select
            name="lang"
            className="bg-transparent text-base font-semibold text-white outline-none"
          >
            <option defaultValue="English" defaultChecked>
              English
            </option>
            <option value="English">English</option>
          </select>
          <select
            name="usd"
            className="bg-transparent text-base font-semibold text-white outline-none"
          >
            <option defaultValue="USD" defaultChecked>
              USD
            </option>
            <option value="USD">USD</option>
          </select>
          <a
            href="#"
            className="flex items-center text-base font-semibold text-white"
          >
            Login <UserHeader />
          </a>
          <a
            href="#"
            className="flex items-center text-base font-semibold text-white"
          >
            Wishlist <LikeHeaderIcon />
          </a>
          <button>
            <CardHeaderIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
