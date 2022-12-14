/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { InputSinve } from '..';
import {
  RegisterFormWrapper,
  RegisterButton,
  VerificationCodeWrapper,
  VerificationCodeButton,
  ButtonWrapper,
} from './style';

const RegisterForm = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <RegisterFormWrapper>
        <InputSinve width="360px" placeholder="Nome" login />
        <InputSinve width="360px" placeholder="Email" login />
        <InputSinve type="password" width="360px" placeholder="Senha" login />
        <InputSinve width="360px" placeholder="Telefone" login />
        <VerificationCodeWrapper>
          <InputSinve width="222px" placeholder="Código de verificação" login />
          <VerificationCodeButton>Solicitar</VerificationCodeButton>
        </VerificationCodeWrapper>
      </RegisterFormWrapper>
      <ButtonWrapper>
        <RegisterButton
          onClick={() => console.log('login')}
        >
          Registrar
        </RegisterButton>
      </ButtonWrapper>
    </>
  );
};

export default RegisterForm;
