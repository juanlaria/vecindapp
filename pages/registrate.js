import { useState } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import {
  Button,
  Container,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

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

const FormLegend = styled.legend`
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 0.6rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const Title = styled.h1`
  font-size: 1rem;
  margin: 1.8rem auto 0.4rem;
  text-align: center;
  text-transform: uppercase;
`;

const InputsGroup = styled.div`
  display: grid;
  grid-gap: 1.4rem;
  grid-template-columns: 1fr 1fr;
`;

const SubmitWrapper = styled(Container)`
  display: flex !important;
  flex-direction: column;
  margin-top: 2.5rem;
`;

const Disclaimer = styled.p`
  font-size: 0.6rem;
  color: #767070;
  margin: 0.4rem 0 1rem;
`;

export default function SignIn() {
  const [city, setCity] = useState('');
  const [ownership, setOwnership] = useState('Dueño');

  return (
    <>
      <Head>
        <title>Registrate. Vecindapp</title>
      </Head>
      <Header hasMenu={false} />
      <Main>
        <Title>Registrate</Title>
        <Form noValidate autoComplete="off">
          <Container>
            <Disclaimer>
              (*) Los campos con asterisco son obligatorios
            </Disclaimer>
            <InputWrapper>
              <TextField
                id="filled-name"
                label="Nombre y apellido*"
                placeholder="Juan Perez"
                variant="filled"
              />
            </InputWrapper>
            <InputWrapper>
              <TextField
                id="filled-address"
                label="Dirección (calle y número)*"
                placeholder="Av. Rivadavia 3500"
                variant="filled"
              />
            </InputWrapper>
            <InputsGroup>
              <InputWrapper>
                <TextField
                  id="filled-floor"
                  label="Piso*"
                  placeholder="10"
                  variant="filled"
                />
              </InputWrapper>
              <InputWrapper>
                <TextField
                  id="filled-apartment"
                  label="Departamento*"
                  placeholder="A"
                  variant="filled"
                />
              </InputWrapper>
            </InputsGroup>
            <InputWrapper>
              <FormControl>
                <InputLabel id="select-label">Localidad*</InputLabel>
                <Select
                  labelId="select-label"
                  id="select"
                  value={city}
                  variant="filled"
                  onChange={e => setCity(e.target.value)}
                >
                  <MenuItem value={'CABA'}>CABA</MenuItem>
                  <MenuItem value={'Vicente López'}>Vicente López</MenuItem>
                  <MenuItem value={'San Isidro'}>San Isidro</MenuItem>
                </Select>
              </FormControl>
            </InputWrapper>
            <InputWrapper>
              <TextField
                id="filled-date"
                label="¿Desde cuándo sos parte del edificio?*"
                type="date"
                datetimeformat="mm/yy"
                InputLabelProps={{
                  shrink: true,
                }}
                helperText="Ingresá la fecha con este formato: DD/MM/AA"
                variant="filled"
              />
            </InputWrapper>
            <InputWrapper>
              <FormControl component="fieldset">
                <FormLegend>Titularidad*</FormLegend>
                <RadioGroup
                  aria-label="Tituralidad"
                  name="ownership"
                  value={ownership}
                  onChange={e => setOwnership(e.target.value)}
                >
                  <FormControlLabel
                    value="Dueño"
                    control={<Radio />}
                    label="Dueño"
                  />
                  <FormControlLabel
                    value="Inquilino"
                    control={<Radio />}
                    label="Inquilino"
                  />
                </RadioGroup>
              </FormControl>
            </InputWrapper>
            <InputWrapper>
              <TextField
                id="filled-phone"
                label="Número de celular*"
                placeholder="(011) 23456789"
                variant="filled"
                helperText="Código de área y número telefónico sin 15"
              />
            </InputWrapper>
            <InputWrapper>
              <TextField
                id="filled-phone"
                label="Correo electrónico*"
                type="email"
                variant="filled"
              />
            </InputWrapper>
            <InputWrapper>
              <TextField
                id="filled-password"
                label="Contraseña*"
                type="password"
                variant="filled"
                helperText="Tu contraseña debe tener entre 6 y 8 caracteres, y al menos una mayúscula y un número."
              />
            </InputWrapper>
          </Container>
          <SubmitWrapper>
            <Button
              variant="contained"
              component={CustomLink}
              href="/"
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
