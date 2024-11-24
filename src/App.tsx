import React from 'react';
import './App.css';
// import "primereact/resources/themes/saga-orange/theme.css";
import "./utils/orange-theme.css"
import MainMenu from './components/main-menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuienesSomos from './components/inicio/quienes-somos';
import MainInicio from './components/inicio/main-inicio';
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>



function App() {
  return (
    <BrowserRouter>
    <MainMenu/>
    <div className='components'>
      <Routes>
        <Route path='/' Component={MainInicio}></Route>
        <Route path='/quienes-somos' Component={QuienesSomos}></Route>
        <Route path='/inicio' Component={MainInicio}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
