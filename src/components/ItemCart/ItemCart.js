import React from 'react'
import { useCartContext } from '../../CartContext/CartContext'
import './ItemCart.css'

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
  return (
    <div>
      <div id='img'>
      <img src={product.imagen} width='600px' className='img'></img>
      </div>
        <div id='contain-compra'>
            <p>{product.titulo}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio unitario: ${product.precio}</p>
            <p>Subtotal: ${product.quantity * product.precio}</p>
            <button onClick={() => removeProduct(product.id)} id='btn2'>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart