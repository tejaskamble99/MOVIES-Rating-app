import React from 'react'

function WatchList() {
  return (
    <div>
      <div className='flex justify-center flex-wrap m-4 '>
        <div className='rounded-xl text-white items-center font-bold flex justify-center bg-blue-400 h-[3rem] w-[9rem] mx-4'>Action</div>
        <div className='rounded-xl text-white items-center font-bold flex justify-center bg-blue-400 h-[3rem] w-[9rem] mx-4'>Action</div>
        <div className='rounded-xl text-white items-center font-bold flex justify-center bg-blue-400 h-[3rem] w-[9rem] mx-4'>Action</div>
      </div>





      <div className='flex justify-center my-4'>
        <input type='text'  placeholder='Search Field'className='h-[3rem] w-[18rem] bg-gray-200  outline-none px-4' />
      </div>
      <div className=' overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
              <tr>
                  <th>Name</th>
                  <th>Ratings</th>
                  <th>Popularity</th>
                  <th>Genre</th>
              </tr>
          </thead>
          <tbody>
                <tr className='border-b-2'>
                  <td className='flex items-center px-6 py-4'>
                    <img className='h-[6rem]'src={'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1713657600&semt=sph'} alt="" />
                    <div className='mx-10'> COlORS</div>                  
                  </td>
                  
                  <td>
                    8.5
                  </td>

                  <td>
                    9
                  </td>
                  
                  <td>
                    Action
                  
                  </td>

                  <td className='text-red-800'>Delete</td>
                
                </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WatchList
