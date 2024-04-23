import React, { useState } from "react";

function WatchList(props) {
  const { handleDelete, watchList } = props;



  
  const [search, setSearch] = useState("");

  let handelsearch = (e) => {
    setSearch(e.target.value.toLowerCase());
    // console.log(e);
  };

  return (
    <div>
      <div className="flex justify-center flex-wrap m-4">
        {/* Display genres */}
        {watchList
          .filter((movieObj) => movieObj.title.toLowerCase().includes(search))
          .map((movieObj) => (
            <div
              key={movieObj.id}
              className="rounded-xl text-white items-center font-bold flex justify-center bg-blue-400 h-[3rem] w-[9rem] mx-4"
            >
              {movieObj.genre}
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
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Display movie details */}
            {watchList
          .filter((movieObj) => movieObj.title.toLowerCase().includes(search))
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
                <td>{movieObj.genre}</td>
                <td
  className="text-red-800"
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
