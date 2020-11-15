import { useRouter } from 'next/router';
import Head from 'next/head';
import styled from '@emotion/styled';
import { IconButton, Container, Fab } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';

import { default as CustomLink } from '../../../components/Link';
import { useState } from 'react';

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
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
`;

const MeetingActions = styled.div`
  max-width: calc(100% * (2 / 3));
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
  text-align: center;
`;

const MeetingDetail = styled.p`
  font-size: 0.8rem;
  margin: 0.6rem auto;
`;

const MeetingSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  margin: 0.6rem auto;
`;

const SettingWrapper = styled.div`
  & + & {
    margin-left: 0.8rem;
  }
`;

export default function EnterMeeting() {
  const [videoToggle, setVideoToggle] = useState(true);
  const [micToggle, setMicToggle] = useState(true);
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
          <Wrapper>
            <TitleWrapper>
              <Title>Reunión de consorcio</Title>
              <Subtitle>
                <time dateTime="2020-11-16T22:00:00.000Z">
                  16 de Noviembre - 19 hs.
                </time>
              </Subtitle>
            </TitleWrapper>
            <MeetingActions>
              <Fab
                color="primary"
                variant="extended"
                component={CustomLink}
                href="/reunion/vivo"
              >
                Ingresar ahora
              </Fab>
              <MeetingDetail>Te están esperando 23 vecinos</MeetingDetail>
              <MeetingSettings>
                <SettingWrapper>
                  <IconButton
                    color="inherit"
                    aria-label=""
                    onClick={() => setVideoToggle(!videoToggle)}
                  >
                    {videoToggle ? <VideocamIcon /> : <VideocamOffIcon />}
                  </IconButton>
                </SettingWrapper>
                <SettingWrapper>
                  <IconButton
                    color="inherit"
                    aria-label=""
                    onClick={() => setMicToggle(!micToggle)}
                  >
                    {micToggle ? <MicIcon /> : <MicOffIcon />}
                  </IconButton>
                </SettingWrapper>
              </MeetingSettings>
            </MeetingActions>
          </Wrapper>
        </Container>
      </Main>
    </>
  );
}
