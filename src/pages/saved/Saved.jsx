import MovieView from "@/components/movie-view/MovieView";
import { useStateValue } from "@/context";
import React from "react";

const Saved = () => {
   const [state] = useStateValue();
   return (
      <div className="my-5">
         <div className="container mx-auto my-5">
            <p className="text-[#fff] text-[18px]">Сохранено</p>
         </div>
         <MovieView movies={state.saved} />
      </div>
   );
};

export default Saved;
