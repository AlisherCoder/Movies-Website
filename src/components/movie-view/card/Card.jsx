import React from "react";

const Card = ({ item }) => {
   const url = import.meta.env.VITE_IMAGE_URL;
   return (
      <div className="flex flex-col gap-3 shadow-2xl shadow-blue-500/20">
         <div className="rounded-[12px] overflow-hidden flex-1">
            <img src={url + item?.poster_path} alt="" />
         </div>
         <div className="flex flex-col gap-2">
            <h3 className="text-2xl text-[#FFF] line-clamp-1">{item?.title}</h3>
            <p className="text-text">{item?.release_date}</p>
         </div>
      </div>
   );
};

export default Card;
