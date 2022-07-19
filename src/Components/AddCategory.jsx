import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    // setCategories(categories => [inputValue, ...categories]);
    setInputValue('')
  }

  return (

    <form onSubmit={(event) => onSubmit(event)} aria-label="form">
      <input 
      type="text"
      placeholder="Buscar Gifs"
      value={inputValue}
      onChange={(event) => onInputChange(event)} />
    </form>

  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}