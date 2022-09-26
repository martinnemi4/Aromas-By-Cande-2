import React from 'react'
import { useCartContext } from '../../CartContext/CartContext'

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
  return (
    <div>
        <img src={product.imagen}></img>
        <div>
            <p>Titulo:{product.titulo}</p>
            <p>Cantidad:{product.quantity}</p>
            <p>Precio unitario:${product.precio}</p>
            <p>Subtotal: ${product.quantity * product.precio}</p>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart