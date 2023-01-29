import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../components";

const title = 'One puch man';
const url = 'http://localhost/asdfeqwfa';

describe('prueba a GifGridItem', () => { 
    
    test('should debe mostrar un title', () => { 
        render(<GifGridItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy();
     })
    
     test('should mostrar  una imagem con el url y el alt indicado', () => { 
        render(<GifGridItem title={title} url={url}/>)
         // expect(screen.getByRole('img', {src: {url}, alt: {title}})).toBeTruthy();
         // expect(screen.getByRole('img').src).toBe(url);
         // expect(screen.getByRole('img').alt).toBe(title);
         const {src, alt} = screen.getByRole('img');
         expect(src).toBe(url);
         expect(alt).toBe(title);
      });
    
     test('should hacer match con el snapshot', () => { 
        const {container} = render(<GifGridItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
     })
 })