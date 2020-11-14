import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Button, IconButton, Typography, Container } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { default as CustomLink } from '../components/Link';
import Header from '../components/Header';

const Main = styled.main`
  padding: 1.2rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  & + & {
    margin-top: 0.8rem;
  }
`;

const Card = styled.section`
  position: relative;
  padding: 0.6rem;
  margin-bottom: 0.8rem;
  background: var(--color-white);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: 1px solid var(--color-black);
`;

const CloseWrapper = styled.div`
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
`;
const CardContent = styled.div`
  padding-top: 2.5rem;
`;
const CardFooter = styled.div``;

const BarContent = styled.div`
  flex-grow: 1;
  align-self: flex-end;
  min-height: 6.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
`;

const LogoWrapper = styled.div`
  margin-bottom: 0.4rem;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Subtitle = styled.h2`
  font-size: 1rem;
`;

const CardTitle = styled(Typography)`
  font-size: 0.6rem;
`;

export default function Home() {
  const [isNotificationVisible, setIsNotificationVisible] = useState(true);
  const notificationTime = minutes => {
    const miliseconds = minutes * 60000;
    const currentDate = new Date();
    const notificationDate = new Date(currentDate - miliseconds).toISOString();
    return notificationDate;
  };

  return (
    <>
      <Head>
        <title>Vecindapp</title>
      </Head>
      <Header>
        <BarContent>
          <LogoWrapper>
            <Image
              src="https://via.placeholder.com/100x100"
              alt=""
              width="50"
              height="50"
            />
          </LogoWrapper>
          <Title>Tu edificio</Title>
          <Subtitle>Charcas 2777, C.A.B.A.</Subtitle>
        </BarContent>
      </Header>
      <Main>
        <Container>
          <Wrapper>
            <Image
              src="/images/illustrations/home.png"
              alt=""
              width="328"
              height="210"
            />
            {isNotificationVisible && (
              <Card>
                <CardContent>
                  <CardTitle variant="body2" component="h2">
                    Se agregó una nueva reunión de consorcio para 16 Noviembre a
                    las 19.00 hs
                  </CardTitle>
                </CardContent>
                <CardFooter>
                  <Button size="small">Ver más</Button>
                  <time dateTime={notificationTime(45)}>Hace 45 minutos</time>
                </CardFooter>
                <CloseWrapper>
                  <IconButton
                    aria-label="close"
                    onClick={() => setIsNotificationVisible(false)}
                  >
                    <CloseIcon />
                  </IconButton>
                </CloseWrapper>
              </Card>
            )}
            <ButtonWrapper>
              <Button
                variant="contained"
                color="primary"
                component={CustomLink}
                href="/reuniones"
              >
                Reuniones
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button
                variant="contained"
                color="primary"
                onClick={() => alert('Botón deshabilitado')}
              >
                Expensas y gastos
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button
                variant="contained"
                color="primary"
                onClick={() => alert('Botón deshabilitado')}
              >
                Novedades
              </Button>
            </ButtonWrapper>
          </Wrapper>
        </Container>
      </Main>
    </>
  );
}
