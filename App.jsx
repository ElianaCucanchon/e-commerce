import React from 'react' //Esto ya no es necesario
import './styles/App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { ItemListContainer } from './components/ItemListContainer'
import { Footer } from './components/Footer/footer'
import {Cart} from './components/Cart'
import { Checkout} from './components/Checkout'
import { ItemDetailsContainer } from './components/ItemDetailsContainer'
import { NotFount } from './components/NotFount' 









export const App = () => {
  return (
    <BrowserRouter>
    < NavBar />
    <Routes>
      
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/product/:pid' element={<ItemDetailsContainer />} />
      <Route path='/category/:cid' element={<ItemListContainer />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} /> 
      <Route path='*' element={<NotFount />}/>
      
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}



