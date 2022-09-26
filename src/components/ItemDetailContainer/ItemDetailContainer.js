import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom'




const listaTortas = [
    {
    id: 1,
    category: "chocolates",
    titulo: "Torta de Oreo", 
    precio: 5000,
    imagen: "https://www.recetasderechupete.com/wp-content/uploads/2019/11/Tarta-de-Oreo.jpg"
    },
    {
    id: 2,
    category: "chocolates",
    titulo: "Chocotorta", 
    precio: 5000,
    imagen: "https://www.clarin.com/img/2020/07/15/la-chocotorta-perfecta-planeta___qH4UH5dLO_1256x620__1.jpg"
    },
    {
    id:3,
    category: "frutillas",
    titulo: "Torta de Frutillas", 
    precio: 5000,
    imagen: "https://www.lanacion.com.ar/resizer/H_3dpkDawL8jYeoyT37KVrL36AY=/309x206/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/SOQYIXD4EFDLFMITRRHFAQEXEE.jpg"
    },
    {
    id: 4,
    category: "chocolates",
    titulo: "Marquise de Chocolate", 
    precio: 5000,
    imagen: "https://truffle-assets.imgix.net/79143177-marquise-1920x1080-thumbnail.jpg"
    }
];


const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

useEffect(() => {
    const getData = new Promise(resolve => {
    setTimeout(() => {
        resolve(listaTortas);
    }, 1000);
    });

    getData.then(res => setData(res.find(listaTortas => listaTortas.id === parseInt(detalleId))));
}, [detalleId]);

    return ( <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;
