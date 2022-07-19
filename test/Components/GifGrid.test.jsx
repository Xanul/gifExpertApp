import { render, screen } from '@testing-library/react';
import { GifGrid } from "../../src/Components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
  
  const category = 'One Punch';

  test('Debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category}/>);
    // screen.debug();
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));

  });

  test('Debe de mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => {

    const gifs = [
    {
      id: 'ABC',
      title: 'Saitama',
      url: 'http://pruebas.com'
    },
    {
      id: '123',
      title: 'Pokemon',
      url: 'http://gogu.com'
    }
  ]

    useFetchGifs.mockReturnValue({
      images:gifs,
      isLoading: false,
    });

    render(<GifGrid category={category}/>)
    // screen.debug();

    expect( screen.getAllByRole('img').length ).toBe(2);


  })

})