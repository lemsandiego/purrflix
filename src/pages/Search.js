import { MovieCard } from "../components";
import { useFetch } from "../hooks/useFetch.js";
import { useSearchParams } from "react-router-dom";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch({ apiPath: apiPath, queryTerm: queryTerm });
 
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="mb-10">
          <p className="text-base sm:text-2xl dark:text-white">{movies.length > 0 ? `Results found for "${queryTerm}"` : `No results found for "${queryTerm}"`}</p>
        </div>

        <div className="flex justify-start flex-wrap gap-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div> 
      </section>
    </main>
  )
}
