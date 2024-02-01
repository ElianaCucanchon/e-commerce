import React from 'react';  //Esto ya no es necesario
import './styles/App.css'
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CartWidget } from './components/CartWidget/CartWidget';


export const App = () => {
  return (
    <>
      < NavBar/>
      < CartWidget/>
    </>
  );
}



