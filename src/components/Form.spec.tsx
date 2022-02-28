import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { Form }  from './Form';
import userEvent from '@testing-library/user-event';

const renderComponent = () =>{
    render(<Form />);
}

const cpfIsValid = '90486958051';
const cpfIsNotValid = '08937746753';


describe('components/Form', () => {
    it('should be able to check initial screen components', () => {
        
        renderComponent();

        const inputElement = document.querySelector('#cpfInput') as HTMLElement;
        expect(inputElement).toBeInTheDocument();
        
        const buttonValidate = document.querySelector('#buttonValidate') as HTMLElement;
        expect(buttonValidate).toBeInTheDocument();

        const menssageAlert = document.querySelector('#menssageAlert') as HTMLElement;
        expect(menssageAlert).not.toBeInTheDocument();

    });
    
    it('should be able to receive cpf for validation', () => {

        renderComponent();
        
        const inputElement = document.querySelector('#cpfInput') as HTMLElement;
        const buttonValidate = document.querySelector('#buttonValidate') as HTMLElement;

        userEvent.type(inputElement, cpfIsValid);
        userEvent.click(buttonValidate);

        const menssageAlert = document.querySelector('#menssageAlert') as HTMLElement;
        expect(menssageAlert).toBeInTheDocument();

    });

    it('should be able to check the message type', () => {

        const { getByText } = render(<Form />);
        
        const inputElement = document.querySelector('#cpfInput') as HTMLElement;
        const buttonValidate = document.querySelector('#buttonValidate') as HTMLElement;

        userEvent.type(inputElement, cpfIsValid);
        userEvent.click(buttonValidate);
        expect(getByText('CPF válido')).toBeInTheDocument();

        userEvent.type(inputElement, cpfIsNotValid);
        userEvent.click(buttonValidate);
        expect(getByText('CPF inválido')).toBeInTheDocument();

    });

});