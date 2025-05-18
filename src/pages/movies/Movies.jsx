import Genres from "@/components/genres/Genres";
import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFetch";
import Pagination from "@mui/material/Pagination";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import Skleton from "./Skleton";

const Movies = () => {
   const [params, setParams] = useSearchParams();
   let page = params.get("page") || 1;
   let genres = params.get("genres") || "";
   let with_genres = genres.split("-").join(",").slice(1);

   const { data, error, loading } = useFetch("/discover/movie", { page, with_genres, without_genres: "18, 10749, 36, 27, 99" });

   const handleChange = (event, value) => {
      if (value == 1) {
         params.delete("page");
      } else {
         params.set("page", value.toString());
      }
      setParams(params);
   };

   const handleChangeGenre = useCallback((id) => {
      let array = genres.split("-");
      if (array.includes(id)) {
         genres = array.filter((i) => i !== id).join("-");
      } else {
         genres += `-${id}`;
      }

      params.set("page", "1");
      if (!genres) {
         params.delete("genres");
         params.delete("pages");
      } else {
         params.set("genres", genres);
      }

      setParams(params);
   }, []);

   return (
      <div className="mb-[40px]">
         <Genres genres={genres} handleChangeGenre={handleChangeGenre} />
         {loading ? <Skleton /> : <MovieView movies={data?.results} />}
         <div className="container mx-auto flex justify-center my-10 w-full py-2 rounded-[12px]">
            <Pagination
               page={Number(page)}
               count={data?.total_pages > 500 ? 500 : data?.total_pages}
               onChange={handleChange}
               color="primary"
               sx={{
                  "& .MuiPaginationItem-root": {
                     color: "#c61f1f",
                     // border: '1px solid white', // ensures border is visible
                  },
                  "& .MuiPaginationItem-root.Mui-selected": {
                     backgroundColor: "#1D1D1D",
                     color: "white",
                  },
                  "& .MuiPaginationItem-root:hover": {
                     backgroundColor: "rgba(255,255,255,0.1)",
                  },
               }}
            />
         </div>
      </div>
   );
};

export default Movies;
