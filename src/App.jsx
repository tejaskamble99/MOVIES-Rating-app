import { useState } from 'react'

import './App.css'
import Navbar from './componetnts/Navbar'
import Movies from './componetnts/Movies'
import WatchList from './componetnts/WatchList'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Banner from './componetnts/Banner'


function App() {
  let [watchList, setwatchList] = useState([]);
  let handeladdList =(movieObj)=>{
    let newWatchlist = [...watchList, movieObj]
    setwatchList(newWatchlist)
    console.log(newWatchlist)

  }

  let handelremoveList = (movieObjToRemove) => {
    console.log("Removing movie:", movieObjToRemove);
    let filteredList = watchList.filter((movie) => {
      return movie.id !== movieObjToRemove.id;
    });
    console.log("Filtered list:", filteredList);
    setwatchList(filteredList);
  };
  
  
  return (
    <>
    <BrowserRouter>

    <Navbar />
    
    <Routes>
      <Route path='/' element={<><Banner /> <Movies watchList={watchList} handelremoveList={handelremoveList}  handeladdList={handeladdList} /></>} />
      <Route path='/watchlist' element={<WatchList  />} /> 
    
    
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
