import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"

describe('prueba al componente AddCategory', () => { 
    
    test('should debe de cambiar el valor de la caja de text', () => { 
        
        render(<AddCategory onNewCategory={ () => {}}/>)
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, {target: {value: 'Saitama'}} )
        
        expect(input.value ).toBe('Saitama') 
        // screen.debug()
    })
    test('should de llamar onNewCategory si el input tiene un valor', () => { 
       
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: { value: inputValue }} );
        fireEvent.submit( form );

        expect(input.value).toBe('');
        // screen.debug()
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
        
    });
    test('no should de llamar el onNewCategory si el input esta void', () => { 
        
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>)

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        // expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

    });

 })
