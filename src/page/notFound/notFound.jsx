import React from "react";
import { HeroMain } from "../../components/hero-main";
import { NotFoundIcon } from "../../assets/icon/notFound-icon";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import img from "../../assets/img/fashion.png";
export const NotFound = () => {
  return (
    <>
      <HeroMain
        title="404 Not Found"
        text="Home "
        text2="Pages"
        mainText="404 Not Found"
      />
      <section className="pb-[124px]">
        <div className="container flex justify-center">
          <NotFoundIcon />
        </div>
        <Link to="/" className="flex justify-center">
          <Button type="button" variant="primary">
            Back To Home
          </Button>
        </Link>
      </section>
      <section className="pb-[60px]">
        <div className="container flex justify-center">
          <img src={img} alt="img" />
        </div>
      </section>
    </>
  );
};
