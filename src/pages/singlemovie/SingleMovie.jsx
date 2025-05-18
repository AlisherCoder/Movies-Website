import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFetch";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaRegHourglass } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";

const SingleMovie = () => {
   const { id } = useParams();
   const { data } = useFetch(`/movie/${id}`);
   const url = import.meta.env.VITE_IMAGE_URL;
   const { data: images } = useFetch(`/movie/${id}/images`);
   const { data: similars } = useFetch(`/movie/${id}/similar`);
   useEffect(() => {
      scrollTo(0, 0);
   }, []);

   return (
      <div className="container mx-auto flex flex-col gap-5">
         <div className="relative rounded-[12px] overflow-hidden">
            <img className="transition-opacity" loading="lazy" src={url + data?.backdrop_path} alt="" />

            <div className="text-[#fff] flex items-end absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent">
               <div className="grid grid-cols-2 p-5">
                  <div className="py-1 flex flex-col gap-1 sm:gap-2 justify-center">
                     <div className="flex gap-3 items-center">
                        <FaStar className=" text-amber-300" />
                        <p className="text-[10px] sm:text-[18px]">{data?.vote_average}</p>
                     </div>

                     <div className="flex gap-3 items-center">
                        <TbMoneybag className="" />
                        <strong className="text-[10px] sm:text-[18px]">{data?.budget?.toLocaleString()} USD</strong>
                     </div>

                     <div className="flex gap-3 items-center">
                        <FaGlobeAmericas className="" />
                        {data?.origin_country.map((country, i) => (
                           <p className="text-[10px] sm:text-[18px]" key={i}>
                              {country}
                           </p>
                        ))}
                     </div>

                     <div className="flex gap-3 items-center">
                        <FaRegHourglass className="" />
                        <p className="text-[10px] sm:text-[18px]">{`${Math.floor(data?.runtime / 60)} hour ${data?.runtime % 60} minute`}</p>
                     </div>

                     <div className="flex gap-3 text-text items-center">
                        {data?.genres.map((genre) => (
                           <p className="text-[10px] sm:text-[18px]" key={genre.id}>
                              #{genre.name}
                           </p>
                        ))}
                     </div>
                  </div>

                  <div className="flex flex-col md:gap-4 justify-end">
                     <h1 className="md:text-4xl">{data?.title}</h1>
                     <p className="text-text text-clip line-clamp-3 md:line-clamp-4">{data?.overview}</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="flex flex-col gap-5">
            <h3 className="sm:text-2xl text-[#fff] font-bold">Производственные компании</h3>

            <div className="flex gap-5 overflow-auto no-scrollbar justify-center items-center bg-amber-50 py-2.5 opacity-80">
               {data?.production_companies.map((comp) =>
                  comp.logo_path ? (
                     <div key={comp.id} className="">
                        <img className="w-[100px] object-cover" src={url + comp.logo_path} alt="" />
                     </div>
                  ) : (
                     <div key={comp.id}>
                        <p>{comp.name}</p>
                     </div>
                  )
               )}
            </div>
         </div>

         <div>
            <h3 className="text-[#fff] sm:text-2xl font-bold">Кадры из фильма</h3>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {images?.backdrops?.slice(0, 10)?.map((image) => (
               <img loading="lazy" src={url + image.file_path} key={image.file_path} alt="" />
            ))}
         </div>

         <div className="mb-5">
            <h3 className="sm:text-2xl font-bold text-[#fff] mb-5">Похожий</h3>
            <MovieView movies={similars?.results?.slice(0, 12)} />
         </div>
      </div>
   );
};

export default SingleMovie;
