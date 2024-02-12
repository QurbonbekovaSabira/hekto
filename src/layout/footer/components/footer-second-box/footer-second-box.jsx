import React from "react";
import { Instagram } from "../../../../assets/icon/instagram";
import { FacebookIcon } from "../../../../assets/icon/facebook-icon";
import { TwiterIcon } from "../../../../assets/icon/twiter-icon";
export const FooterSecondBox = () => {
  return (
    <div className="bg-cyber-lavender py-[17px]">
      <div className="container flex items-center justify-around">
        <p className="text-santas-grey text-base font-semibold">
          ©Webecy - All Rights Reserved
        </p>
        <div className="flex items-center gap-[10px]">
          <FacebookIcon />
          <Instagram />
          <TwiterIcon />
        </div>
      </div>
    </div>
  );
};
