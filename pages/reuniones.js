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
  font-size: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
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
  min-width: calc(100% / 3);
  background: var(--color-lightGrey);
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.6rem;
    font-weight: 800;
  }
`;

const CardContent = styled.div`
  padding: 0.8rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  border-bottom: 1px solid var(--color-lightGrey);
  padding-bottom: 0.4rem;
  margin-bottom: 0.4rem;
`;

const CardTitleText = styled.span``;

const CardTitleDate = styled.time``;

const CardActions = styled.div``;

const ButtonWrapper = styled.div`
  & + & {
    margin-top: 0.4rem;
  }
`;

export default function Meetings() {
  const router = useRouter();
  const hasUpcomingMeeting = router.query?.nueva;

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
                width="218"
                height="95"
              />
            </ImageWrapper>
            <SectionTitle>Reuniones 2020</SectionTitle>
            <CardsList>
              {hasUpcomingMeeting && (
                <CardItem>
                  <Card component="section">
                    <CardInner upcoming>
                      <CardDate>
                        <p>16/11</p>
                      </CardDate>
                      <CardContent>
                        <CardTitle>
                          <CardTitleText>Reunión de consorcio</CardTitleText>
                          <CardTitleDate dateTime="2020-11-16T22:00:00.000Z">
                            16 de Noviembre - 19 hs.
                          </CardTitleDate>
                        </CardTitle>
                        <CardActions>
                          <ButtonWrapper>
                            <Button
                              size="small"
                              color="primary"
                              component={CustomLink}
                              href="/temas"
                            >
                              Ir a la lista de temas
                            </Button>
                          </ButtonWrapper>
                          <ButtonWrapper>
                            <Button
                              size="small"
                              color="primary"
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
                    <CardDate>
                      <p>05/07</p>
                    </CardDate>
                    <CardContent>
                      <CardTitle>
                        <CardTitleText>Reunión extraordinaria</CardTitleText>
                        <CardTitleDate dateTime="2020-07-05T22:00:00.000Z">
                          05 de Julio - 19 hs.
                        </CardTitleDate>
                      </CardTitle>
                      <CardActions>
                        <ButtonWrapper>
                          <Button
                            size="small"
                            color="secondary"
                            component={CustomLink}
                            href="/reunion-pasada"
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
                    <CardDate>
                      <p>05/07</p>
                    </CardDate>
                    <CardContent>
                      <CardTitle>
                        <CardTitleText>Reunión de consorcio</CardTitleText>
                        <CardTitleDate dateTime="2020-04-11T22:00:00.000Z">
                          11 de Abril - 19 hs.
                        </CardTitleDate>
                      </CardTitle>
                      <CardActions>
                        <ButtonWrapper>
                          <Button
                            size="small"
                            color="secondary"
                            component={CustomLink}
                            href="/reunion-pasada"
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
