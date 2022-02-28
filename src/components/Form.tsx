import {useState, useEffect} from 'react';
import validate from './Cpf';
// import './styles.css';

export function Form(){
    const [cpf, setCpf] = useState('');
    const [enableButton, setEnableButton] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');

    function maskCpf(str : string){
        setCpf(validate.displayFormat(str));
    }

    function onlyNumber(str : string){
        let numsStr = str.replace(/[^0-9]/g,'');
        setCpf(numsStr);
    }

    function validateCpf(){
        const isValid = validate.cpfIsValid(cpf.replace(/[^0-9]/g,''));
        if(isValid){
            setMessage('CPF válido');
        }else{
            setMessage('CPF inválido');   
        }
        setShowMessage(true);
    }

    useEffect(()=>{
        if(cpf.length >= 11){
            maskCpf(cpf);
            setEnableButton(true);
        }else{
            setEnableButton(false);
            setShowMessage(false);
        }
    },[cpf]);

    return (
        <div className='container'>
            <div className='form'>
                <input id="cpfInput" placeholder='Informe o CPF' value={cpf} onChange={(val) => onlyNumber(val.target.value)} maxLength={11} required />
                <button id="buttonValidate" onClick={validateCpf} disabled={!enableButton}>Validar CPF</button>
            </div>
            <div className='menssage'>
                {showMessage &&
                    <span id="menssageAlert">{message}</span>
                }    
            </div>
        </div>
    );
}