import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./componetnts/Navbar";
import Movies from "./componetnts/Movies";
import WatchList from "./componetnts/WatchList";
import { BrowserRouter, Route, Routes, json } from "react-router-dom";
import Banner from "./componetnts/Banner";

function App() {
  let [watchList, setwatchList] = useState([]);

  
  let handeladdList = (movieObj) => {
    let newWatchlist = [...watchList, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchlist));
    setwatchList(newWatchlist);
    // console.log(newWatchlist);
  };

 // Function to handle deletion of a movie from the watch list
let handleDelete = (movieId) => {
  // Filter out the movie with the given ID
  const updatedWatchList = watchList.filter((movie) => movie.id !== movieId);
  // Update the state with the filtered watch list
  setwatchList(updatedWatchList);
  // Update local storage with the updated watch list
  localStorage.setItem("moviesApp", JSON.stringify(updatedWatchList));
};

// Function to handle removal of a movie from the watch list
let handelremoveList = (movieObjToRemove) => {
  // Filter out the movie to be removed
  let filteredList = watchList.filter((movie) => movie.id !== movieObjToRemove.id);
  // Update the state with the filtered watch list
  setwatchList(filteredList);
  // Update local storage with the updated watch list
  localStorage.setItem("moviesApp", JSON.stringify(filteredList));
};

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (moviesFromLocalStorage) {
      setwatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />{" "}
                <Movies
                  watchList={watchList}
                  handelremoveList={handelremoveList}
                  handeladdList={handeladdList}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList handleDelete={handleDelete} watchList={watchList} setwatchList={setwatchList} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
