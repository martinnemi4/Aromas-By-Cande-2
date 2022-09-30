import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../CartContext/CartContext'
import ItemCart from '../ItemCart/ItemCart';
import {addDoc, collection, getFirestore} from 'firebase/firestore'

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

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection (db, 'orders');
    addDoc(ordersCollection, order)
      .then(({ id }) => console.log(id))
  }

if (cart.length === 0) {
  return(
    <>
      <p>No hay productos en el carrito!</p>
      <Link to='/'>Ir a la tienda</Link>
    </>
  );
}


  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p>
        Total: $ {totalPrice()}
      </p>
      <button onClick={handleClick}>Emitir compra</button>
    </>
  )
}

export default Cart