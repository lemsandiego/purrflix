import { MovieCard } from "../components";

export const MovieList = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap gap-5">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard /> 
          <MovieCard />
        </div> 
      </section>
    </main>
  );
};
