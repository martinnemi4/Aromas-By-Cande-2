import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
//import { CartContext } from '../../CartContext/CartContext'
import { useCartContext } from '../../CartContext/CartContext'
const Item = ({info}) => {
const nombre = useCartContext()


  return (
    <Link to={`/detalle/${info.id}`}>
        <img width="350px" src={info.imagen}></img>
        <h5>{info.titulo}</h5>
    </Link>
  )
}

export default Item