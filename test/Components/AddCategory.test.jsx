import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/Components/AddCategory";

describe('Pruebas en el componente <AddCategory/>', () => {

  

  test('Debe de cambiar el valor de la caja de texto', () => {

    render(<AddCategory onNewCategory={()=>{}}/>);
    // screen.debug();

    const input = screen.getByRole('textbox');
    fireEvent.input( input, {target: {value: 'Saitama'}} );
    expect(input.value).toBe('Saitama');

    // screen.debug();

  });

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {

    const inputValue = 'Goku';
    
    const onNewCategoryMock = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategoryMock }/>);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form', {name: 'form'});

    fireEvent.input( input, {target: {value: inputValue}} );
    fireEvent.submit( form );
    
    expect(input.value).toBe('');

    expect(onNewCategoryMock).toHaveBeenCalled();
    expect(onNewCategoryMock).toHaveBeenCalledTimes(1);
    expect(onNewCategoryMock).toHaveBeenCalledWith(inputValue)

  });

  test('No debe de llamar el onNewCategory si el input esta vacio', () => {

    const onNewCategoryMock = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategoryMock }/>);

    const form = screen.getByRole('form');
    
    fireEvent.submit(form);

    expect(onNewCategoryMock).not.toHaveBeenCalled();
    

  });


});

