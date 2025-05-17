import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFetch";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
   const [query, setQuery] = useState("");
   const { data, loading } = useFetch(`/search/movie?query=${query}`, { without_genres: "18, 10749, 36, 27, 99" });

   useEffect(() => {}, [query]);

   return (
      <div>
         <div className="container mx-auto flex flex-col gap-[120px] items-center my-12">
            <div className="border lg:w-[380px] flex px-5 bg-[#111] gap-3 rounded-[12px] items-center">
               <IoSearch className="text-2xl text-primary " />
               <input value={query} onChange={(e) => setQuery(e.target.value)} required className="text-[#fff] w-full h-full py-5 outline-none" type="text" placeholder="Названия фильма" />
            </div>
            {data?.results?.length > 0 ? (
               loading ? (
                  <Loader className="text-primary w-15 h-15 animate-spin text-muted-foreground" />
               ) : (
                  <div>
                     <MovieView movies={data?.results} />
                  </div>
               )
            ) : (
               <div className="text-center flex flex-col gap-20 text-text">
                  <p>Страница пока пуст</p>
                  <p>По вашему запросу ничего не найдена</p>
               </div>
            )}
         </div>
      </div>
   );
};

export default Search;
