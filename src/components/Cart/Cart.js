import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../CartContext/CartContext'
import ItemCart from '../ItemCart/ItemCart';
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import './Cart.css'

const Cart = () => {
  const {cart, totalPrice} = useCartContext();

  const order = {
    buyer:{
      nombre:'Pablo',
      email:'pablomail',
      celular:'2222',
      direccion:'free'
    },
    items: cart.map(product => ({id: product.id, titulo: product.titulo, precio: product.precio, quantity: product.quantity})),
    total: totalPrice(),
  }

 /* const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection (db, 'orders');
    addDoc(ordersCollection, order)
      .then(({ id }) => console.log(id))
  } */

if (cart.length === 0) {
  return(
    <div id='cart'>
      <p id='textcart'>No hay productos en el carrito!</p>
      <div id='btn3'>
      <button><Link to='/'>Ir a la tienda</Link></button>
      </div>
      
    </div>
  );
}


  return (
    <div id='cart-padre'>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p id='preciototal'>
        Total: $ {totalPrice()}
      </p>
      <div id='btn3'>
      <button><Link to='/form'>Emitir compra</Link></button>
      </div>
    </div>
  )
}

export default Cart

