import Head from 'next/head';
import styled from '@emotion/styled';
import { Button, Container, TextField } from '@material-ui/core';

import Header from '../components/Header';
import { default as CustomLink } from '../components/Link';

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 1.4rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 1rem;
  margin: 1.8rem auto;
  text-align: center;
  text-transform: uppercase;
`;

const ForgotButton = styled.p`
  margin: 0.8rem 0 1.2rem;

  a {
    font-size: 0.7rem;
    color: var(--color-primary);
  }
`;

const SubmitWrapper = styled(Container)`
  display: flex !important;
  flex-direction: column;
  margin-top: auto;
`;

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Iniciar sesión. Vecindapp</title>
      </Head>
      <Header hasMenu={false} />
      <Main>
        <Title>Iniciar sesión</Title>
        <Form noValidate autoComplete="off">
          <Container>
            <InputWrapper>
              <TextField
                id="email"
                label="Correo electrónico"
                type="email"
                variant="filled"
              />
            </InputWrapper>
            <ForgotButton>
              <a onClick={() => alert('Botón deshabilitado')}>
                ¿Olvidaste tu correo electrónico?
              </a>
            </ForgotButton>
            <InputWrapper>
              <TextField
                id="password"
                label="Contraseña"
                type="password"
                variant="filled"
                helperText="Tu contraseña debe tener entre 6 y 8 caracteres, y al menos una mayúscula y un número."
              />
            </InputWrapper>
            <ForgotButton>
              <a onClick={() => alert('Botón deshabilitado')}>
                ¿Olvidaste tu contraseña?
              </a>
            </ForgotButton>
          </Container>
          <SubmitWrapper>
            <Button
              variant="contained"
              component={CustomLink}
              href="/?proxima=true"
              color="primary"
            >
              Ingresar
            </Button>
          </SubmitWrapper>
        </Form>
      </Main>
    </>
  );
}
