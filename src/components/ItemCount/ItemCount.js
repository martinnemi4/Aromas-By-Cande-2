import React, { useState, useEffect } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    //Aumentar contador
    const countUp = () => {
        setCount(count + 1)
    }
    //Restar contador
    const countDown = () => {
        setCount(count - 1)
    }

    useEffect(() =>{
        setCount(parseInt(initial))
    }, [initial])

  return (
    <div>
        <button disabled={count <= 1} onClick={countDown}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={countUp}>+</button>
        <div>
            <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount