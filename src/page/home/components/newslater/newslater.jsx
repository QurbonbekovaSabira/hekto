import React from "react";
import { Button } from "../../../../components/button";

export const Newslater = () => {
  return (
    <section className="bg-[url(./assets/img/subscribe-bg.png)] bg-cover bg-center pb-[103px] pt-[174px]">
      <div className="container">
        <h2 className="mx-auto mb-[28px] max-w-[50%] text-center text-4xl font-bold text-text-color">
          Get Leatest Update By Subscribe 0ur Newslater
        </h2>
        <div className="text-center">
          <Button type="button" variant="primary">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};
