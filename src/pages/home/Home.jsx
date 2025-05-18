import { Slider } from "@/components/swiper/Swiper";
import { useFetch } from "@/hooks/useFetch";
import React from "react";
import { SliderCards } from "./SwiperCards";
import Skleton from "./Skleton";

const Home = () => {
   const { data, loading } = useFetch("/discover/movie");
   return (
      <div>
         {loading ? (
            <Skleton />
         ) : (
            <>
               <Slider movies={data?.results} />
               <SliderCards movies={data?.results} />
            </>
         )}
      </div>
   );
};

export default React.memo(Home);
