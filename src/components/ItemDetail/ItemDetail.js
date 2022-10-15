import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../CartContext/CartContext';
import './ItemDetail.css'
const ItemDetail = ({data}) => {
  const [goToCart,setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    console.log('Agregaste ' + quantity + ' unidades al carrito');
    setGoToCart(true);
    addProduct(data, quantity);
  }

  return (
    <div>
        <div className='ID'>
            <img width="600px" src={data.imagen} id='imgdt'/>
            <div>
                <h3>{data.titulo}</h3>
      {goToCart ? <Link to='/cart' id='btn'>Ir al carrito</Link> : <ItemCount
      initial={1}
      stock={7}
      onAdd={onAdd}
      /> }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail;