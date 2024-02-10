import React from "react";
import { homeAboutData } from "../../../../data/home-about-data";
import { FeaturedCard } from "./components/featuredCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const AboutHome = () => {
  return (
    <section className="pb-[121px] pt-[129px]">
      <div className="container">
        <h2 className="mb-[48px] text-center text-5xl font-bold text-text-color">
          Featured Products
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {homeAboutData?.map((item) => (
            <SwiperSlide key={item.id} className="mb-[53px]">
              <FeaturedCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
