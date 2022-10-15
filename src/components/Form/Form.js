import './Form.css'
import React from 'react'
import {TextField, Button} from '@mui/material'
import { Formik } from 'formik';
import * as yup from 'yup';
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { useCartContext } from '../../CartContext/CartContext'
import Swal from 'sweetalert2'


const yupSchema = yup.object()
.shape({
    name: yup.string()
    .min(2, 'Demasiado corto')
    .max(50, 'Demasiado largo')
    .required('Campo Requerido'),
    lastname: yup.string()
    .min(2, 'Demasiado corto')
    .max(50, 'Demasiado largo')
    .required('Campo Requerido'),
    email: yup.string().email('Email Invalido').required('Campo Requerido'),
}).required();



const Form = () => {
    const {cart, totalPrice} = useCartContext();
  const order = {
    buyer:{ 
        nombre: 'any',
        email: 'any',
        apellido: 'any',
    },
    items: cart.map(product => ({id: product.id, titulo: product.titulo, precio: product.precio, quantity: product.quantity})),
    total: totalPrice(),
  }

  const submitHandler = (values, resetForm) => {
    console.log(values);
    resetForm();
    const db = getFirestore();
    const ordersCollection = collection (db, 'orders');
    addDoc(ordersCollection, order)
        .then(({ id }) => Swal.fire(
            'Ya compraste!',
            'Tu numero de seguimiento es: ' + (id),
            'success'
        ))
}


return (
    
    <div id='form-contain'>
        <div > 
        <h3>Formulario de Compra</h3>
        <p>Ingresa tus datos para finalizar tu compra</p>

        <Formik initialValues={{ name:'', lastname:'', email:'' }}
        onSubmit={(values, {resetForm}) => submitHandler(values, resetForm)}
        validationSchema={yupSchema}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            dirty,
        }) => (
        <form id='form' onSubmit={handleSubmit}>
        <TextField
        name='name'
        placeholder='Nombre'
        variant="outlined"
        className='Textfield-name'
        sx={{ mb: 1 }}
        onChange={handleChange}
        value={values.name}
        onBlur={handleBlur}/>
        <p className='required'>{errors.name && touched.name && errors.name}</p>
        <TextField
        name='lastname'
        placeholder='Apellido'
        variant="outlined"
        className='Textfield-apellido'
        sx={{ mb: 1 }}
        onChange={handleChange}
        value={values.lastname}
        onBlur={handleBlur}/>
        <p className='required'>{errors.lastname && touched.name && errors.lastname}</p>
        <TextField
        name='email'
        placeholder='Correo Electronico'
        variant="outlined"
        className='Textfield-correo'
        sx={{ mb: 1 }}
        onChange={handleChange}
        value={values.email}
        onBlur={handleBlur}/>
        <p className='required'>{errors.email && touched.email && errors.email}</p>
        <Button
        disabled={!(isValid && dirty)}
        variant='contained'
        type='submit'
        sx={{ width: '400px', height: '54px', margin: '20px' }}
        onClick={submitHandler}>
            Comprar
        </Button>
        </form>
        )}
        </Formik>
        </div>
    </div>
)
}

export default Form