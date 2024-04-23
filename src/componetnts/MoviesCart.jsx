import React from 'react';
import WatchList from './WatchList';

function MoviesCart(props) {
  const { movieObj,handelremoveList, poster_path, name, handleAddList, watchList } = props;

  // Function to check if a movie is in the watch list
  const isMovieInWatchList = () => {
    return watchList.some(item => item.id === movieObj.id);
  };

  return (
    <div className='relative hover:scale-110 duration-300'>
      <div className='h-[40vh] w-[200px] bg-center bg-cover flex flex-col rounded-xl' style={{backgroundImage:`url(http://image.tmdb.org/t/p/original/${poster_path})`}}>
      </div>
      {isMovieInWatchList() ? (
        <div onClick={() => handelremoveList(movieObj)} className='absolute top-0 right-0 p-2 bg-gray-900/60 rounded-lg m-2'>&#10060;</div>
      ) : (
        <div onClick={() => handleAddList(movieObj)} className='absolute top-0 right-0 p-2 bg-gray-900/60 rounded-lg m-2'>
          &#128525;
        </div>
      )}
      <div className='absolute bottom-0 left-0 right-0 w-full bg-gray-900/60 text-white text-xl text-center p-2'>{name}</div>
    </div>
  );
}

export default MoviesCart;
