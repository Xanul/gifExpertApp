import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en el componente GifExpertApp', () => {

  const inputValue = 'Batman'

  test('Se debe escribir en el input', () => {

    render(<GifExpertApp />);
    
    const input = screen.getByRole('textbox');
    fireEvent.input(input, {target: {value: inputValue}});
    expect(input.value).toBe('Batman');
  });

  test('Si la categoria no existe se debe agregar', () => {

    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value: inputValue}});
    fireEvent.submit(form);
    expect(screen.getByText(inputValue)).toBeTruthy();
    // screen.debug();

  });

  test('Validar que no se agrege una categoria existente', async () => {

    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value: inputValue}});
    fireEvent.submit(form);
    fireEvent.input(input, {target: {value: inputValue}});
    fireEvent.submit(form);

    // screen.debug();
    
    const items = await screen.findAllByText(inputValue);
    expect(items).toHaveLength(1);

    expect(items.length).toBeLessThan(2);

  })

})