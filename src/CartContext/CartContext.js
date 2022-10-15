import React, {useState, useContext} from 'react'
import './CartContext.css'
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);


const CartProvider = ({children}) => {
//Estado para almacenar el carrito
const [cart,setCart] = useState([]);

//Vaciar carrito
const clearCart = () => setCart([]);

//Ver si esta en el carrito
const isInCart = (id) => {
    return cart.find (product => product.id === id) ? true : false ;
}

//Eliminar producto
const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

//Agregar producto
const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
        setCart(cart.map(product => {
            return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
        }));
    } else {
        setCart([...cart, {...item, quantity}]);
    }
}
console.log('Carrito:', cart);

const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
}
const totalProducts = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity, 0);



  return (
    <div>
        <CartContext.Provider value={{
            clearCart, 
            isInCart, 
            removeProduct, 
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    </div>
  )
}

export default CartProvider