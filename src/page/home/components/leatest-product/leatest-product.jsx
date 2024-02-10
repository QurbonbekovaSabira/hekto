import React from "react";
import { LeatestCard } from "./components";
import { leatestData } from "../../../../data/leatest-data";
import clsx from "clsx";
export const LeatestProduct = () => {
  const [state, setState] = React.useState(leatestData[0]);
  const [name, setName] = React.useState(leatestData[0].name);
  const updateProduct = (name) => {
    let product = leatestData.find((item) => item.name === name);
    setName(product.name);
    setState(product);
  };
  return (
    <section>
      <div className="container">
        <h2 className="text-text-color mb-[19px] text-center text-5xl font-bold">
          Leatest Products
        </h2>
        <div className="mb-[62px] flex items-center justify-center gap-[58px]">
          {leatestData.map((item) => (
            <button
              key={item.id}
              className={clsx(
                "text-lg font-normal",
                name == item.name
                  ? "border-b border-solid border-secondary  text-secondary"
                  : "text-text-color",
              )}
              onClick={() => updateProduct(item.name)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-x-[32px] gap-y-[120px]">
          {state?.product?.map((item) => (
            <LeatestCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
