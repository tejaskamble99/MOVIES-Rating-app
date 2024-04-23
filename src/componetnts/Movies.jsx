import React, { useEffect, useState } from 'react';
import MoviesCart from './MoviesCart';
import axios from 'axios';
import Paging from './Paging';

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    // Assuming you have some way to determine the total number of pages
    const totalPages = 10; // Update this with your actual total number of pages
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0c5f44f824c57ed3352645c1022dabcd&language=en-US&page=${currentPage}`)
      .then(function (res) {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [currentPage]);

  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center'>
          Trending Movie
      </div>
      <div className='flex flex-row flex-wrap justify-around gap-8'>
        {movies.map((movieObj)=>{
          return <MoviesCart key={movieObj.id} poster_path={movieObj.poster_path} name={movieObj.original_title} />
        })}
      </div>
      <Paging currentPage={currentPage} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage} />
    </div>
  );
}

export default Movies;
