import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import Card from "@/components/movie-view/card/Card";
import { NavLink } from "react-router-dom";

export const SliderCards = ({ movies }) => {
   return (
      <div className="container mx-auto my-20">
         <div className="flex justify-between items-center mb-5">
            <p className="text-[#fff] text-2xl">На неделе</p>
            <NavLink className="text-primary flex gap-1 text-[18px] items-center justify-center" to={"/movies"}>
               Показать все
               <MdOutlineKeyboardArrowRight className="text-[24px]" />
            </NavLink>
         </div>
         <Swiper
            style={{
               "--swiper-pagination-color": "#C61F1F",
               "--swiper-navigation-color": "#fff",
               "--swiper-pagination-background-color": "#fff",
            }}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            keyboard={{
               enabled: true,
            }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
               640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
               },
               1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
               },
            }}
         >
            {movies?.map((movie) => (
               <SwiperSlide className="mb-10">
                  <Card item={movie} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};
