import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Button } from '@material-ui/core';

import { default as CustomLink } from '../components/Link';
import { Container } from '../shared/styles';

const Main = styled.main`
  padding: 1.2rem 0;
`;

const Wrapper = styled.div`
flex: 1;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`;

const LogoContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 1.2rem;
`;

const TitleText = styled.h1`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1.2rem;
`;

const BodyText = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 0.8rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  & + & {
    margin-top: 0.8rem;
  }
`;

const ButtonText = styled.span`
  margin-left: 4px;
  margin-right: 4px;
`;

export default function Welcome() {
  return (
    <>
      <Head>
        <title>¡Vecindapp te da la bienvenida!</title>
      </Head>
      <Main>
        <Container>
          <Wrapper>
            <LogoContainer>
              <Image
                src="https://via.placeholder.com/600x600"
                alt=""
                width="169"
                height="169"
              />
            </LogoContainer>
            <TitleText>¡Vecindapp te da la bienvenida!</TitleText>
            <BodyText>
              Comunicate con tus vecinos más fácil y enterate de todo lo que
              pasa en tu edificio.
            </BodyText>
            <ButtonWrapper>
              <Button
                variant="contained"
                color="primary"
                component={CustomLink}
                href="/ingresar"
              >
                Ingresar
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button
                variant="outlined"
                color="primary"
                component={CustomLink}
                href="/"
              >
                <Image
                  src="/images/logos/google.png"
                  alt=""
                  width="24"
                  height="24"
                />
                <ButtonText>Ingresar con Google</ButtonText>
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button
                variant="outlined"
                color="primary"
                component={CustomLink}
                href="/"
              >
                <Image
                  src="/images/logos/facebook.svg"
                  alt=""
                  width="12"
                  height="24"
                />
                <ButtonText>Ingresar con Facebook</ButtonText>
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button color="primary" component={CustomLink} href="/registrate">
                Registrate
              </Button>
            </ButtonWrapper>
          </Wrapper>
        </Container>
      </Main>
    </>
  );
}
