import {useState} from 'react';
import { AddCategory } from './Components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);
  
  const onAddCategory = () => {
    setCategories([...categories, 'Valorant']);
    // setCategories(cat => [...cat, 'Dragon Ball']);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory setCategories={ setCategories }/>
    
      {/* Listado de gifs */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {categories.map(category => <li key={ category }>{category}</li>)}
      </ol>
        {/* Gif Item */}
    </>
  )
}
