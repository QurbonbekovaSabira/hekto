import React from "react";
import { TopCategoriesCard } from "./components/top-categoriesCard";
import { topCategoriesData } from "../../../../data/top-categories-data";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const TopCategories = () => {
  return (
    <section className="pb-[125px] pt-[79px]">
      <div className="container">
        <h2 className="mb-[76px] text-center text-5xl font-bold text-text-color">
          Top Categories
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className=" flex"
        >
          {topCategoriesData?.map((item) => (
            <SwiperSlide key={item.id} className="mb-[86px] ">
              <TopCategoriesCard key={item.id} {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
