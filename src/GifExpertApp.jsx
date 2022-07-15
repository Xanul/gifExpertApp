import {useState} from 'react';
import { AddCategory } from './Components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);
  
  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories])

    // setCategories([...categories, newCategory]);
    // setCategories(cat => [...cat, 'Dragon Ball']);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory 
        // setCategories={ setCategories }
        onNewCategory={event => onAddCategory(event)}
      />
    
      {/* Listado de gifs */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {categories.map(category => <li key={ category }>{category}</li>)}
      </ol>
        {/* Gif Item */}
    </>
  )
}
