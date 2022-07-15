import { useState } from "react"

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  }

  return (

    <form onSubmit={(event) => onSubmit(event)}>
      <input 
      type="text"
      placeholder="Buscar Gifs"
      value={inputValue}
      onChange={(event) => onInputChange(event)} />
    </form>

  )
}
