import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
   const url = import.meta.env.VITE_IMAGE_URL;
   const navigate = useNavigate();
   return (
      <div onClick={() => navigate(`/movie/${item.id}`)} className="flex flex-col gap-3 select-none">
         <div className="rounded-[12px] overflow-hidden flex-1">
            <img src={url + item?.poster_path} alt="" loading="lazy" />
         </div>
         <div className="flex flex-col gap-2">
            <h3 className="text-2xl text-[#FFF] line-clamp-1">{item?.title}</h3>
            <p className="text-text">{item?.release_date}</p>
         </div>
      </div>
   );
};

export default Card;
