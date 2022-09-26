import React from 'react'
import Item from '../Item/Item'


const ItemList = ({data = []}) => {
  return (
    data.map(listaTortas => <Item key={listaTortas.id} info={listaTortas}/>)
  )
}

export default ItemList