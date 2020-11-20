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
  color: #5e6eff;
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

export default function Bill() {
  return (
    <>
      <Head>
        <title>Factura para el tema "Cortes de luz". Vecindapp</title>
      </Head>
      <Header hasMenu={false}>
        <HeaderTitle>Reunión de consorcio</HeaderTitle>
      </Header>
      <Main>
        <Container>
          <Wrapper>
            <ContentWrapper>
              <Title>Factura</Title>
              <DescriptionTitle>Descripción</DescriptionTitle>
              <Description>
                El día 10 de Diciembre de 2020, se realizó la compra del grupo
                electrógeno votado en la pasada reunión de consorcio del
                30/11/2020.
              </Description>
              <Description>
                El próximo martes 15 de diciembre será la instalación del mismo.
                A partir de dicha fecha se podrá hacer uso del generador. Ante
                cualquier eventualidad, tiene una garantía de dos años.
              </Description>
            </ContentWrapper>
            <MeetingActions>
              <ButtonWrapper>
                <Button
                  color="primary"
                  onClick={() => alert('Factura descargada')}
                >
                  Descargar factura
                </Button>
              </ButtonWrapper>
            </MeetingActions>
          </Wrapper>
        </Container>
      </Main>
    </>
  );
}
