import React from 'react'
import MoviesCart from './MoviesCart'

function Movies() {
  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center'>
          Trending Movie
      </div>
      <div className='flex flex-row flex-wrap justify-around'>
        <MoviesCart />
        <MoviesCart />
        <MoviesCart />
        <MoviesCart />
        <MoviesCart />
        <MoviesCart />
        <MoviesCart />
        <MoviesCart />
        <MoviesCart />
        <MoviesCart />
        <MoviesCart />
        <MoviesCart />
        <MoviesCart />
        <MoviesCart />
      </div>
    </div>
  )
}

export default Movies
