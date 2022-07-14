import {useState} from 'react';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Pokemon']);
  
  const onAddCategory = () => {
    setCategories([...categories, 'Valorant']);
    // setCategories(cat => [...cat, 'Dragon Ball']);
  }

  return (
    <>
      {/* Titulo */}

      <h1>GifExpertApp</h1>
      {/* Input */}

      {/* Listado de gifs */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map(category => <li key={ category }>{category}</li>)}
      </ol>
        {/* Gif Item */}
    </>
  )
}
