import PropTypes from 'prop-types'
import { Formulario } from '../components/Form';
import { AlertRegister } from '../components/Alert';
import { Redes } from '../components/Redes';

export const Register = ({onChange, handleErrors, formErrors }) => {
  const icons= [
    'fa-brands fa-github',
    'fa-brands fa-linkedin',
    'fa-brands fa-twitter',
  ];
  

  return (
        <>
            <h1>Crear una Cuenta</h1>
            <p>Ousa tu email para Registrarte</p>
            <Redes icons={icons}/>
            <Formulario
                onChange={onChange} 
                handleErrors={handleErrors}
            />
            <AlertRegister 
                formErrors={formErrors} 
                color={formErrors === 'Registro exitoso' ? 'success' : 'danger'}
            />
        </>   
    );
};

Register.propTypes = {
    onChange: PropTypes.func,
    handleErrors: PropTypes.func,
    formErrors: PropTypes.string,
};
