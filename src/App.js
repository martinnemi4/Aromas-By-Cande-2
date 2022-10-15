import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import CartProvider from './CartContext/CartContext';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
