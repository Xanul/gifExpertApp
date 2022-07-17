import { render } from "@testing-library/react"
import { GifItem } from "../../src/Components/GifItem"


describe('Probando el componente GifItem', () => {

  const title = 'Saitama';
  const url = 'https://one-punch.com/saitama.jpg';

  test('Debe de hacer match con el snapshot', () => {

   const {container} = render (<GifItem title={title} url={url}/>);

   expect(container).toMatchSnapshot();

  });

})