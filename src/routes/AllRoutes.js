import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, PageNotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-800">
      <Routes>
          <Route path="/" element={<MovieList apiPath="movie/now_playing" pageTitle="Home" />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/movies/popular" element={<MovieList apiPath="movie/popular" pageTitle="Popular" />} />
          <Route path="/movies/top" element={<MovieList apiPath="movie/top_rated" pageTitle="Top Rated" />} />
          <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming" pageTitle="Upcoming" />} />
          <Route path="/search" element={<Search apiPath="search/movie" />} />
          <Route path="*" element={<PageNotFound pageTitle="Page Not Found" />} />
      </Routes>
    </div>
  )
}
  