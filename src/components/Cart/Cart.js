import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../CartContext/CartContext'
import ItemCart from '../ItemCart/ItemCart';


const Cart = () => {
  const {cart, totalPrice} = useCartContext();

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
    </>
  )
}

export default Cart