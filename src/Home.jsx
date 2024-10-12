import React from 'react'
import Main from './Component/Main/Main';
import Cards from './Component/Cards/Cards';
import Cont from './Component/Cont/Cont';
import Dop from './Component/Dop/Dop';
import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
   <div className="Home">
     <Main />
     <Cards />
     <Cont />
     <Dop />
   </div>

  )
}

export default Home