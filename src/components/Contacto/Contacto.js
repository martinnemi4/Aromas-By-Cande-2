import React from 'react'
import {TextField, Button} from '@mui/material'
import './Contacto.css'


const Contacto = () => {
  return (
    <div id='contain'>
        <div>
            <h3>Comunicate con nosotros</h3>
            <p>Deja tus datos y te respondemos a la brevedad!</p>
        </div>
        <div id='datos'>
            <p>📞 Teléfono: +54 11 2251-8665</p>
            <p>📍 Ubicación: Tigre, Buenos Aires</p>
        </div>
        <div>
            <form id='form'>
                <TextField
                sx={{ mb: 1 }}
                placeholder='Nombre completo'/>
                <TextField
                sx={{ mb: 1 }}
                placeholder='Correo electronico'/>
                <TextField
                sx={{ mb: 1 }}
                placeholder='Asunto'/>
                <TextField
                sx={{ mb: 1 }}
                placeholder='Mensaje'/>
                <div id='btn2'>
                <Button id='btn-hijo'>Enviar</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contacto