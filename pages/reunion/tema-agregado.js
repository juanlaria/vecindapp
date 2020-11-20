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

const TitleWrapper = styled.div`
  max-width: calc(100% * (2 / 3));
  text-align: center;
  margin: 0 auto;
  margin-bottom: 0.6rem;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
`;

const Subtitle = styled.p`
  font-size: 0.7rem;
`;

const ImageWrapper = styled.div`
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  margin-top: 1.4rem;
`;

const MeetingActions = styled.div`
  flex: 1;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  margin-top: 0.8rem;
  text-align: center;
`;

export default function TopicAdded() {
  return (
    <>
      <Head>
        <title>Reunión de consorcio en vivo. Vecindapp</title>
      </Head>
      <Header hasMenu={false} />
      <Main>
        <Container>
          <Wrapper>
            <ImageWrapper>
              <Image
                src="/images/illustrations/topic-added.png"
                alt=""
                width="328"
                height="210"
              />
            </ImageWrapper>
            <TitleWrapper>
              <Title>¡Muchas gracias por proponer un tema!</Title>
              <Subtitle>
                Podés compartirlo con tus vecinos para que lo apoyen.
              </Subtitle>
            </TitleWrapper>
            <MeetingActions>
              <ButtonWrapper>
                <Button
                  color="primary"
                  variant="contained"
                  component={CustomLink}
                  href="/reunion?tema=true"
                >
                  Ver lista de temas
                </Button>
              </ButtonWrapper>
              <ButtonWrapper>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  Compartir tema
                </Button>
              </ButtonWrapper>
            </MeetingActions>
          </Wrapper>
        </Container>
      </Main>
    </>
  );
}
