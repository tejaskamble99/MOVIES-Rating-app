import { useState } from 'react'

import './App.css'
import Navbar from './componetnts/Navbar'
import Movies from './componetnts/Movies'
import WatchList from './componetnts/WatchList'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Banner from './componetnts/Banner'


function App() {
  
  return (
    <>
    <BrowserRouter>

    <Navbar />
    
    <Routes>
      <Route path='/' element={<><Banner /> <Movies /></>} />
      <Route path='/watchlist' element={<WatchList />} /> 
    
    
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
