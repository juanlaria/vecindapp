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
  margin: 0.8rem auto 2.4rem;
`;

const Title = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  align-self: center;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  margin: 0 auto;
  margin-bottom: 1.2rem;
  text-align: center;
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
      <Header>
        <Title>Reuniones</Title>
      </Header>
      <Main>
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
            <SectionTitle>Reuniones 2020</SectionTitle>
            <CardsList>
              {newMeetingStatus === 'past' ? (
                <CardItem>
                  <Card variant="outlined" component="section">
                    <CardInner>
                      <CardContent>
                        <CardTitle>Reunión de consorcio</CardTitle>
                        <CardDescription>
                          <time dateTime="2020-11-30">30 de Noviembre</time>. Se
                          trataron temas como cortes de luz y humedad en el
                          hall.
                        </CardDescription>
                        <CardActions>
                          <ButtonWrapper>
                            <Button
                              size="small"
                              color="primary"
                              component={CustomLink}
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
                          <time dateTime="2020-30-11">
                            <b>30</b> <span>Noviembre</span>
                          </time>
                        </p>
                      </CardDate>
                      <CardContent>
                        <CardTitle main>Reunión de consorcio</CardTitle>
                        <CardDescription>
                          Se realizará el{' '}
                          <time dateTime="2020-30-11T22:00:00.000Z">
                            lunes 30 a las 19 hs.
                          </time>{' '}
                          de forma remota.
                        </CardDescription>
                        <CardActions>
                          <ButtonWrapper>
                            <Button
                              color="primary"
                              component={CustomLink}
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
              <CardItem>
                <Card variant="outlined" component="section">
                  <CardInner>
                    <CardContent>
                      <CardTitle>Reunión extraordinaria</CardTitle>
                      <CardDescription>
                        <time dateTime="2020-03-23">23 de Marzo</time>. El tema
                        principal fue la pandemia y el nuevo protocolo.
                      </CardDescription>
                      <CardActions>
                        <ButtonWrapper>
                          <Button
                            size="small"
                            color="primary"
                            component={CustomLink}
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
                        <time dateTime="2020-02-01">01 de Febrero</time>. El
                        tema a tratar no fue resuelto y espera resolución
                        inmediata.
                      </CardDescription>
                      <CardActions>
                        <ButtonWrapper>
                          <Button
                            size="small"
                            color="primary"
                            component={CustomLink}
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
