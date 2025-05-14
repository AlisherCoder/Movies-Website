import Genres from "@/components/genres/Genres";
import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFetch";
import React, { useState } from "react";

const Movies = () => {
   const [genre, setGenre] = useState("");
   const { data, error, loading } = useFetch("/discover/movie", { page: 1, with_genres: genre, without_genres: "18, 10749, 36, 27, 99" });
   return (
      <div className="mb-[40px]">
         <Genres setGenre={setGenre} genre={genre} />
         <MovieView movies={data?.results} />
      </div>
   );
};

export default Movies;
