import React from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from './components/Watchlist';
import { Add } from "./components/Add";
import "./App.css"
import "./lib/font-awesome/css/all.min.css";


import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
      {/** Navigation bar common to all pages */}
      <Header />
      {/** The route management system of our application */}
      <Routes>
          <Route path="/" element={<Watchlist/>}/>
          <Route path="/add" element={<Add/>} />
      </Routes>
  </BrowserRouter>
    </GlobalProvider>
    
  );
}

export default App;
