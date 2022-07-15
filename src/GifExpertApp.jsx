import {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);
  
  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories])

    // setCategories([...categories, newCategory]);
    // setCategories(cat => [...cat, 'Dragon Ball']);
  }

  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={event => onAddCategory(event)}
      />

      {categories.map(category => <GifGrid key={category} category={category} />)}
      
    </>
  )
}
