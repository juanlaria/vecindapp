import Image from 'next/image';
import Head from 'next/head';
import styled from '@emotion/styled';
import { Button, Container } from '@material-ui/core';

import { default as CustomLink } from '../../components/Link';
import Header from '../../components/Header';

const Main = styled.main`
  padding: 1.2rem 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div``;

const HeaderTitle = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  align-self: center;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
`;

const DescriptionTitle = styled.h2`
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
`;

const Description = styled.p`
  font-size: 0.7rem;
  opacity: 0.6;
  margin-bottom: 0.4rem;
`;

const Author = styled.p`
  font-size: 0.7rem;
  color: #5E6EFF;
  margin-bottom: 0.6rem;
`;

const ButtonWrapper = styled.div`
  flex: 1;

  display: flex;
`;

const MeetingActions = styled.div`
  flex: 1;
  width: 100%;
  margin: 0 auto;
  margin-top: 0.8rem;
`;

export default function Resolution() {
  return (
    <>
      <Head>
        <title>Resolución de tema "Cortes de luz". Vecindapp</title>
      </Head>
      <Header hasMenu={false}><HeaderTitle>Reunión de consorcio</HeaderTitle></Header>
      <Main id="main">
        <Container>
          <Wrapper>
            <ContentWrapper>
              <Title>Cortes de luz constantes</Title>
              <DescriptionTitle>Descripción</DescriptionTitle>
              <Description>
                Se corta la luz minimamente 3 veces por semana dejando al
                edificio sin ascensor, sin agua. Propongo la compra urgente de
                un grupo electrógeno como solución.
              </Description>
              <Author>Vecino: José M.</Author>
            </ContentWrapper>
            <MeetingActions>
              <ButtonWrapper>
                <Button
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  Ver archivos adjuntos
                </Button>
              </ButtonWrapper>
              <ButtonWrapper>
                <Button
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  Presupuesto votado
                </Button>
              </ButtonWrapper>
              <ButtonWrapper>
                <Button
                  color="primary"
                  component={CustomLink}
                  href="/reunion/factura"
                >
                  Ver factura
                </Button>
              </ButtonWrapper>
            </MeetingActions>
          </Wrapper>
        </Container>
      </Main>
    </>
  );
}
