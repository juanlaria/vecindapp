import { useRouter } from 'next/router';
import Head from 'next/head';
import styled from '@emotion/styled';
import { IconButton, Container, Fab } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Main = styled.main`
  padding: 1.2rem 0;
`;

export default function LiveMeeting() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Reunión de consorcio en vivo. Vecindapp</title>
      </Head>
      <Main>
        <Container>
          <header>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="go back"
              onClick={() => router.back()}
            >
              <ArrowBackIcon />
            </IconButton>
          </header>
          <h1>Reunión en vivo</h1>
        </Container>
      </Main>
    </>
  );
}
