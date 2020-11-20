import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from '@emotion/styled';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Container,
} from '@material-ui/core';

import { default as CustomLink } from '../components/Link';
import Header from '../components/Header';

const Main = styled.main`
  padding: 1.2rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImageWrapper = styled.div`
  margin: 0 auto 0.8rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 0.8rem;
`;

const BarContent = styled.div`
  width: 100%;
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
  font-size: 1rem;
  text-transform: uppercase;
`;

const Subtitle = styled.h2`
  font-size: 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.4rem;
`;

const CardDescription = styled.p`
  font-size: 0.7rem;
`;

const ActionsWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default function Home() {
  const router = useRouter();

  const [notificationVisible, setNotificationVisible] = useState(null);

  useEffect(() => {
    let initialNotification;

    if (router.query?.proxima) {
      initialNotification = 'upcoming-meeting';
    }

    if (router.query?.hoy) {
      initialNotification = 'today-meeting';
    }

    if (router.query?.compra) {
      initialNotification = 'resolved';
    }

    if (router.query?.resumen) {
      initialNotification = 'summary';
    }

    setNotificationVisible(initialNotification);
  }, [router]);

  return (
    <>
      <Head>
        <title>Vecindapp</title>
      </Head>
      <Header>
        <BarContent>
          <LogoWrapper>
            <Image
              src="/images/logos/vecindapp.png"
              alt=""
              width="40"
              height="48"
            />
          </LogoWrapper>
          <Title>Tu edificio</Title>
          <Subtitle>Charcas 2777, C.A.B.A.</Subtitle>
        </BarContent>
      </Header>
      <Main>
        <Container>
          <Wrapper>
            <ImageWrapper>
              <Image
                src="/images/illustrations/home.png"
                alt=""
                width="328"
                height="210"
              />
            </ImageWrapper>
            {notificationVisible === 'upcoming-meeting' && (
              <Card>
                <CardContent>
                  <CardTitle>¡Próxima reunión de consorcio!</CardTitle>
                  <CardDescription>
                    Será el día 30 de noviembre a las 19hs. Ya podés proponer
                    temas para debatir ese día.
                  </CardDescription>
                </CardContent>
                <CardActions>
                  <ActionsWrapper>
                    <Button
                      component={CustomLink}
                      color="primary"
                      size="small"
                      href="/reuniones"
                    >
                      Leer más
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => setNotificationVisible(null)}
                    >
                      Cerrar
                    </Button>
                  </ActionsWrapper>
                </CardActions>
              </Card>
            )}
            {notificationVisible === 'today-meeting' && (
              <Card>
                <CardContent>
                  <CardTitle>¡Hoy es la reunión de consorcio!</CardTitle>
                  <CardDescription>
                    La misma se realizará a las 19hs. Finalizó el tiempo de
                    propuesta de temas.
                  </CardDescription>
                </CardContent>
                <CardActions>
                  <ActionsWrapper>
                    <Button
                      component={CustomLink}
                      color="primary"
                      size="small"
                      href="/reuniones?hoy=true"
                    >
                      Leer más
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => setNotificationVisible(null)}
                    >
                      Cerrar
                    </Button>
                  </ActionsWrapper>
                </CardActions>
              </Card>
            )}
            {notificationVisible === 'resolved' && (
              <Card>
                <CardContent>
                  <CardTitle>Se compró el grupo electrógeno</CardTitle>
                  <CardDescription>
                    Según lo decidido en la reunión, adquirimos un generador
                    GAMMA, con garantía por 3 años.
                  </CardDescription>
                </CardContent>
                <CardActions>
                  <ActionsWrapper>
                    <Button
                      component={CustomLink}
                      color="primary"
                      size="small"
                      href="/reunion/resolucion"
                    >
                      Leer más
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => setNotificationVisible(null)}
                    >
                      Cerrar
                    </Button>
                  </ActionsWrapper>
                </CardActions>
              </Card>
            )}
            {notificationVisible === 'summary' && (
              <Card>
                <CardContent>
                  <CardTitle>Resumen de la reunión del 30/11</CardTitle>
                  <CardDescription>
                    Mirá los temas que se trataron y las resoluciones.
                  </CardDescription>
                </CardContent>
                <CardActions>
                  <ActionsWrapper>
                    <Button
                      component={CustomLink}
                      color="primary"
                      size="small"
                      href="/reuniones?pasada=true"
                    >
                      Leer más
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => setNotificationVisible(null)}
                    >
                      Cerrar
                    </Button>
                  </ActionsWrapper>
                </CardActions>
              </Card>
            )}
            <ButtonWrapper>
              <Button
                variant="contained"
                color="primary"
                component={CustomLink}
                href={`/reuniones${
                  notificationVisible === 'today-meeting' ? '?hoy=true' : ''
                }${
                  notificationVisible === 'resolved' ? '?pasada=true' : ''
                }${
                  notificationVisible === 'summary' ? '?pasada=true' : ''
                }`}
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
