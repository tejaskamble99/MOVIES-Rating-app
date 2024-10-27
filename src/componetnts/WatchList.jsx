import React, { useEffect, useState } from "react";
import genreid from "../Utility/genres";

function WatchList(props) {
  const { handleDelete, watchList, setwatchList } = props;

  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  let handelFilter = (genre) => {
    setSelectedGenre(genre);
  };
  let handelsearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  let sortIncreasingByRating = () => {
    const sortedIncreasing = [...watchList].sort(
      (movieA, movieB) =>
        parseFloat(movieB.vote_average) - parseFloat(movieA.vote_average)
    );
    setwatchList(sortedIncreasing);
  };

  let sortDecreasingByRating = () => {
    const sortedDecreasing = [...watchList].sort(
      (movieA, movieB) =>
        parseFloat(movieA.vote_average) - parseFloat(movieB.vote_average)
    );
    setwatchList(sortedDecreasing);
  };

  let sortIncreasingByPopularity = () => {
    const sortedIncreasing = [...watchList].sort(
      (movieA, movieB) =>
        parseFloat(movieB.popularity) - parseFloat(movieA.popularity)
    );
    setwatchList(sortedIncreasing);
  };

  let sortDecreasingByPopularity = () => {
    const sortedDecreasing = [...watchList].sort(
      (movieA, movieB) =>
        parseFloat(movieA.popularity) - parseFloat(movieB.popularity)
    );
    setwatchList(sortedDecreasing);
  };

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreid[movieObj.genre_ids[0]];
    });
    setGenreList(["All Genres", ...new Set(temp)]); // Use Set to remove duplicates
  }, [watchList]);

  return (
    <div>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => (
          <div
            key={genre}
            className={`flex justify-center items-center h-[3rem] w-[9rem] rounded-lg m-4 cursor-pointer ${
              selectedGenre === genre ? "bg-gray-400" : "bg-blue-400"
            }`}
            onClick={() => handelFilter(genre)}
          >
            {genre}
          </div>
        ))}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handelsearch}
          value={search}
          type="text"
          placeholder="Search Field"
          className="h-[3rem] w-[18rem] bg-gray-200  outline-none px-4"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>
                <div className="flex justify-center">
                  <div
                    onClick={sortIncreasingByRating}
                    className="p-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className="p-2">Ratings</div>
                  <div
                    onClick={sortDecreasingByRating}
                    className="p-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex justify-center">
                  <div
                    onClick={sortIncreasingByPopularity}
                    className="p-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className="p-2">Popularity</div>
                  <div
                    onClick={sortDecreasingByPopularity}
                    className="p-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {/* Display movie details */}
            {watchList
              .filter((movieObj) => {
                if (selectedGenre === "All Genres") {
                  return true;
                } else {
                  return genreid[movieObj.genre_ids[0]] === selectedGenre;
                }
              })
              .filter((movieObj) =>
                movieObj.title.toLowerCase().includes(search)
              )
              .map((movieObj) => (
                <tr key={movieObj.id} className="border-b-2">
                  <td className="flex items-center px-6 py-4">
                    <img
                      className="h-[6rem]"
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      alt={movieObj.title}
                    />
                    <div className="mx-10">{movieObj.title}</div>
                  </td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>
                    {movieObj.genre_ids.map((genreId) => (
                      <span key={genreId} className="mr-2">
                        {genreid[genreId]}
                      </span>
                    ))}
                  </td>
                  <td
                    className="text-red-800 cursor-pointer"
                    onClick={() => handleDelete(movieObj.id)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WatchList;
