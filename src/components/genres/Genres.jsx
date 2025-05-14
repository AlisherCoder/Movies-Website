import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Genres = ({ setGenre, genre }) => {
   const { data } = useFetch("/genre/movie/list");

   return (
      <div className="container mx-auto py-4">
         <ul className="text-[#fff] flex gap-2 overflow-auto py-1 no-scrollbar">
            {data?.genres?.map((gen) => (
               <li onClick={() => setGenre(gen.id.toString())} className={`text-nowrap text-text cursor-pointer select-none bg-[#1D1D1D] px-2 py-1.5 rounded-[12px] ${genre == gen.id ? "bg-primary text-white" : "bg-[#1D1D1D] hover:bg-[#333]"} `} key={gen.id}>
                  {gen.name}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Genres;
