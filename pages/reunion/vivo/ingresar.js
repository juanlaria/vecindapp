import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import styled from '@emotion/styled';
import { Button, IconButton, Container } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';

import { default as CustomLink } from '../../../components/Link';
import Header from '../../../components/Header';

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
  font-size: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 0.7rem;
`;

const ImageWrapper = styled.div`
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

const MeetingActions = styled.div`
  flex: 1;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  margin-top: 0.8rem;
  text-align: center;
`;

const MeetingDetail = styled.p`
  font-size: 0.7rem;
  margin: 0.6rem auto;
`;

const MeetingSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  margin: 0.8rem auto;
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
      <Header hasMenu={false} />
      <Main id="main">
        <Container>
          <Wrapper>
            <TitleWrapper>
              <Title>Reunión de consorcio</Title>
              <Subtitle>
                <time dateTime="2020-11-16T22:00:00.000Z">
                  16 de Noviembre - 19 horas.
                </time>
              </Subtitle>
            </TitleWrapper>
            <ImageWrapper>
              <Image
                src="/images/illustrations/meetings.png"
                alt=""
                width="218"
                height="95"
              />
            </ImageWrapper>
            <MeetingActions>
              <ButtonWrapper>
                <Button
                  color="primary"
                  variant="contained"
                  component={CustomLink}
role="link"
                  href="/reunion/vivo"
                >
                  Ingresar ahora
                </Button>
              </ButtonWrapper>
              <MeetingDetail>La reunión comenzó hace 2 minutos</MeetingDetail>
              <MeetingSettings>
                <SettingWrapper>
                  <IconButton
                    color="inherit"
                    aria-label={`${
                      videoToggle ? 'Deshabilitar' : 'Habilitar'
                    } cámara`}
                    onClick={() => setVideoToggle(!videoToggle)}
                  >
                    {videoToggle ? <VideocamIcon /> : <VideocamOffIcon />}
                  </IconButton>
                </SettingWrapper>
                <SettingWrapper>
                  <IconButton
                    color="inherit"
                    aria-label={`${
                      micToggle ? 'Deshabilitar' : 'Habilitar'
                    } micrófono`}
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
