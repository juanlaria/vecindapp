import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Button, Container, Card } from '@material-ui/core';

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
  margin: 0.8rem auto 0;
`;

const Title = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  align-self: center;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  margin: 1.5rem 0 1.2rem;
  text-align: left;
`;

const CardsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CardItem = styled.li`
  & + & {
    margin-top: 0.8rem;
  }
`;

const CardInner = styled.div`
  display: flex;
`;

const CardDate = styled.div`
  flex: 0;
  margin: 0.8rem;
  padding: 0.6rem 0.4rem;
  align-self: flex-start;
  border: 1px solid var(--color-lightGrey);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    font-weight: 800;
    color: var(--color-primary);

    b {
      font-size: 1.6rem;
      line-height: 1.6rem;
    }

    span {
      display: block;
      margin-top: 0.4rem;
      font-size: 0.7rem;
      line-height: 0.7rem;
    }
  }
`;

const CardContent = styled.div`
  flex: 1;
  padding: 0.8rem;
`;

const CardTitle = styled.h3`
  font-size: ${props => (props.main ? '1rem' : '1.2rem')};
  margin-bottom: 0.4rem;
`;

const CardDescription = styled.p`
  font-size: 0.7rem;
  margin-bottom: 0.4rem;
`;

const CardActions = styled.div``;

const ButtonWrapper = styled.div`
  & + & {
    margin-top: 0.4rem;
  }
`;

export default function Meetings() {
  const router = useRouter();
  // const hasUpcomingMeeting = true; // router.query?.nueva;

  const [newMeetingStatus, setNewMeetingStatus] = useState('upcoming');

  useEffect(() => {
    if (router.query?.proxima) {
      setNewMeetingStatus('upcoming');
    }

    if (router.query?.hoy) {
      setNewMeetingStatus('today');
    }

    if (router.query?.pasada) {
      setNewMeetingStatus('past');
    }
  }, [router]);

  console.log('STATUS', newMeetingStatus);

  return (
    <>
      <Head>
        <title>Vecindapp</title>
      </Head>
      <Header current="meetings">
        <Title>Reuniones</Title>
      </Header>
      <Main id="main">
        <Container>
          <Wrapper>
            <ImageWrapper>
              <Image
                src="/images/illustrations/meetings.png"
                alt=""
                width="328"
                height="121"
              />
            </ImageWrapper>
            <SectionTitle>Próximas reuniones</SectionTitle>
            <CardsList>
              {newMeetingStatus === 'past' ? (
                <CardItem>
                  <Card variant="outlined" component="section">
                    <CardInner>
                      <CardContent>
                        <CardTitle>Reunión de consorcio</CardTitle>
                        <CardDescription>
                          30 de Noviembre. Se trataron temas como cortes de luz
                          y humedad en el hall.
                        </CardDescription>
                        <CardActions>
                          <ButtonWrapper>
                            <Button
                              size="small"
                              color="primary"
                              component={CustomLink}
                              role="link"
                              href="/reunion/resolucion"
                            >
                              Ver el resumen
                            </Button>
                          </ButtonWrapper>
                        </CardActions>
                      </CardContent>
                    </CardInner>
                  </Card>
                </CardItem>
              ) : (
                <CardItem>
                  <Card component="section">
                    <CardInner upcoming>
                      <CardDate>
                        <p>
                          <b>30</b> <span>Noviembre</span>
                        </p>
                      </CardDate>
                      <CardContent>
                        <CardTitle main>Reunión de consorcio</CardTitle>
                        <CardDescription>
                          Se realizará el lunes 30 a las 19 horas de forma
                          remota.
                        </CardDescription>
                        <CardActions>
                          <ButtonWrapper>
                            <Button
                              color="primary"
                              component={CustomLink}
                              role="link"
                              href="/reunion?vivo=true"
                            >
                              Ir a la lista de temas
                            </Button>
                          </ButtonWrapper>
                          <ButtonWrapper>
                            <Button
                              variant="contained"
                              color="primary"
                              disabled={newMeetingStatus !== 'today'}
                              component={CustomLink}
                              role="link"
                              href="/reunion/vivo/ingresar"
                            >
                              Ir a la reunión
                            </Button>
                          </ButtonWrapper>
                        </CardActions>
                      </CardContent>
                    </CardInner>
                  </Card>
                </CardItem>
              )}
            </CardsList>
            <SectionTitle>Reuniones realizadas</SectionTitle>

            <CardsList>
              <CardItem>
                <Card variant="outlined" component="section">
                  <CardInner>
                    <CardContent>
                      <CardTitle>Reunión extraordinaria</CardTitle>
                      <CardDescription>
                        23 de Marzo. El tema principal fue la pandemia y el
                        nuevo protocolo.
                      </CardDescription>
                      <CardActions>
                        <ButtonWrapper>
                          <Button
                            size="small"
                            color="primary"
                            component={CustomLink}
                            role="link"
                            href="/reunion/resolucion"
                          >
                            Ver el resumen
                          </Button>
                        </ButtonWrapper>
                      </CardActions>
                    </CardContent>
                  </CardInner>
                </Card>
              </CardItem>
              <CardItem>
                <Card variant="outlined" component="section">
                  <CardInner>
                    <CardContent>
                      <CardTitle>Reunión extraordinaria</CardTitle>
                      <CardDescription>
                        01 de Febrero. El tema a tratar no fue resuelto y espera
                        resolución inmediata.
                      </CardDescription>
                      <CardActions>
                        <ButtonWrapper>
                          <Button
                            size="small"
                            color="primary"
                            component={CustomLink}
                            role="link"
                            href="/reunion/resolucion"
                          >
                            Ver el resumen
                          </Button>
                        </ButtonWrapper>
                      </CardActions>
                    </CardContent>
                  </CardInner>
                </Card>
              </CardItem>
            </CardsList>
          </Wrapper>
        </Container>
      </Main>
    </>
  );
}
