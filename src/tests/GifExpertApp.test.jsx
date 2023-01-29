import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";

describe('pruebas al  componente GifExpertApp', () => { 

    test('should mostrar la nueva categoria correctamente', () => { 
        
        const onNewCategory = jest.fn();

        render(<GifExpertApp/>)
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
  
        fireEvent.input(input, {target: {value: 'Saitama'}});
        fireEvent.submit( form );
        
        expect(screen.getAllByText('Saitama').length).toBe(1);
    });

    test('no should mostrar la misma categoria', () => { 
        
        render(<GifExpertApp/>);

        const input = screen.getByRole('textbox');
        const form =  screen.getByRole('form');

        fireEvent.input(input, {target: {value: 'One Punch'}});
        fireEvent.submit(form);

        expect(screen.getAllByText('One Punch').length).toBe(1);

     })
});