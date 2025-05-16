import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFetch";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <div className="container mx-auto">
         <div className="">
            <img src={url + data?.backdrop_path} alt="" />
         </div>
         <div className="text-[#fff]">
            <h1 className="text-4xl">{data?.title}</h1>
            <p>{data?.overview}</p>
            <p>{data?.vote_average}</p>
            <strong>{data?.budget?.toLocaleString()} USD</strong>
         </div>
         <div className="grid grid-cols-5 gap-2.5 py-4">
            {images?.backdrops?.slice(0, 10)?.map((image) => (
               <img src={url + image.file_path} key={image.file_path} alt="" />
            ))}
         </div>
         <div>
            <h3 className="text-2xl font-bold text-amber-50">Similar</h3>
            <MovieView movies={similars?.results?.slice(0, 10)} />
         </div>
      </div>
   );
};

export default SingleMovie;
