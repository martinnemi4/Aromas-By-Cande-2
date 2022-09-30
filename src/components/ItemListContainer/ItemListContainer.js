import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import './ItemListContainer.css'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'



const ItemListContainer = () => {
  const [data, setData] = useState([])

  const {categoriaId} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'ListTortas');
    
    if (categoriaId) {
      const queryFilter = query(queryCollection, where('category', '==', categoriaId))
    getDocs(queryFilter)
      .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
    } else {
      getDocs(queryCollection)
      .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
    }

  }, [categoriaId])

  


  return (
    <div id= 'ILC'>
      <ItemList 
      data={data}
      />
    </div>
  )
}

export default ItemListContainer