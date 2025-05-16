import { useStateValue } from "@/context";
import React from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
   const url = import.meta.env.VITE_IMAGE_URL;
   const navigate = useNavigate();
   const [state, dispatch] = useStateValue();

   return (
      <div className="flex flex-col gap-3 select-none cursor-pointer hover:opacity-90">
         <div className="rounded-[12px] overflow-hidden flex-1 relative">
            <img onClick={() => navigate(`/movie/${item.id}`)} src={url + item?.poster_path} alt="" loading="lazy" />
            <button onClick={() => dispatch({ type: "SAVED", payload: item })} className="absolute p-2 bg-black top-0 right-0 cursor-pointer rounded-bl-lg">
               {state.saved.some(({ id }) => id == item.id) ? <FaBookmark className="text-primary text-[18px]" /> : <FaRegBookmark className="text-[18px] text-[#fff]" />}
            </button>
         </div>

         <div className="flex flex-col gap-2">
            <h3 className="text-2xl text-[#FFF] line-clamp-1">{item?.title}</h3>
            <p className="text-text">{item?.release_date}</p>
         </div>
      </div>
   );
};

export default React.memo(Card);
