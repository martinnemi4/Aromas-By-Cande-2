import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import './Item.css'
import { useCartContext } from '../../CartContext/CartContext'
const Item = ({info}) => {
const nombre = useCartContext()


  return (
    <Link to={`/detalle/${info.id}`} className='Item'>
        <img width="350pxpx" height="200px" src={info.imagen} className="imgdetalle"></img>
        <h5>{info.titulo}</h5>
        <h3>${info.precio}</h3>
    </Link>
  )
}

export default Item