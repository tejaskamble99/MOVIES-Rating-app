import React from 'react';

function Paging({goToNextPage, goToPreviousPage ,currentPage}) {

  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'> 
      <i className="fa-solid fa-left-long px-8 hover:cursor-pointer" onClick={goToPreviousPage} />
      <div className='font-bold'>{currentPage}</div>
      <i className="fa-solid fa-right-long px-8 hover:cursor-pointer" onClick={goToNextPage} />
    </div>
  );
}

export default Paging;
