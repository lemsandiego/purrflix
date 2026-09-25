import fallbackImage from "../assets/fallbackImage.png";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=3b2b4724d0baa63ae14f2e56edd50640`);
      const data = await response.json();
      console.log(data);
      setMovie(data);
    }
    fetchMovie();
  }, [params.id]);

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  }
  // setData(`${apiPath}/${id}`)
  // // console.log(finalApiPath); 
  // const { data: movie } = useFetch({ apiPath, id });

  return (
    <main>
      <section className="max-w-7xl mx-auto p-7">
        <div className="flex justify-center flex-col sm:flex-row gap-10">
          {/* backdrop */}
          <div className="max-w-xs sm:max-w-sm mx-auto">
            <img className="rounded" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}` || fallbackImage} alt="movie poster" />
          </div>

          <div className="flex justify-center sm:justify-start flex-col gap-5">
            {/* title */}
            <h2 className="text-4xl font-bold dark:text-white text-center sm:text-left">{movie.title || <i>No title provided</i>} </h2>

            {/* overview */}
            <p className="mb-3 text-gray-500 dark:text-gray-400">{movie.overview || <i>No overview provided</i>}</p>

            {/* genres */}
            { movie.genres ? (
              <div className="flex flex-row gap-2 flex-wrap">
                { movie.genres.map((genre) => (
                  <span key={genre.id} className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">{genre.name}</span>
                )) }
              </div>) : "" }

            {/* release date */}
            <p className="text-base text-gray-900 dark:text-white">Release Date: {formatDate(movie.release_date) || <i>No date provided</i>}</p>

            {/* runtime */}
            <p className="text-base text-gray-900 dark:text-white">Runtime: {movie.runtime} min</p>
            
            {/* rating */}
            <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{movie.vote_average?.toFixed(1) || 0}</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{`${movie.vote_count} reviews` || <i>No reviews</i>}</span>
            </div>

            {/* imdb link */}
            <div className="text-base text-gray-900 dark:text-white">
              IMDB Code: <a href={`https://www.imdb.com/title/${movie.imdb_id}/?ref_=rlm`} className="hover:underline" rel="noopener noreferrer" target="_blank">{movie.imdb_id}</a>
            </div>
          </div>
        </div> 
      </section>
    </main>
  )
}
