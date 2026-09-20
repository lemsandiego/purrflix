import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, PageNotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-800">
      <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/movies/popular" element={<MovieList />} />
          <Route path="/movies/top" element={<MovieList />} />
          <Route path="/movies/upcoming" element={<MovieList />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
