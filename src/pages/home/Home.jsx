import { Slider } from "@/components/swiper/Swiper";
import { useFetch } from "@/hooks/useFetch";
import React from "react";
import { SliderCards } from "./SwiperCards";

const Home = () => {
   const { data } = useFetch("/discover/movie");
   return (
      <div>
         <Slider movies={data?.results} />
         <SliderCards movies={data?.results} />
      </div>
   );
};

export default React.memo(Home);
