import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled';
import {
  AppBar,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  IconButton,
  Container,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';

import Header from '../../../components/Header';
import TabPanel from '../../../components/Tabs/TabPanel';

import { default as CustomLink } from '../../../components/Link';

const Main = styled.main`
  padding: 0 0 4.5rem;
`;

const TabsHeaderWrapper = styled.div`
  position: sticky;
  top: 86px;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
`;

const TopicsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TopicItem = styled.li`
  & + & {
    border-top: 1px solid var(--color-grey);
  }
`;

const TopicTitle = styled.h2`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const VotingResults = styled.section`
  border-radius: 8px;
  border: 1px solid var(--color-primary);
  padding: 1rem;
  margin: 1rem 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-top: 0.4rem;

    p {
      font-size: 0.8rem;
    }
  }

  small {
    display: block;
    text-align: right;
    font-size: 0.7rem;
    color: var(--color-primary);
  }
`;

const VotingResultsTitle = styled.h3`
  font-size: 0.8rem;
  margin-bottom: 0.6rem;
`;

const AccordionWrapper = styled.div`
  margin: 1.2rem 0;
`;

const AccordionTitle = styled.h3`
  font-size: 0.8rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLegend = styled.legend`
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const MeetingControls = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.4rem 0;
  background-color: #37474f;
  max-width: 500px;
  margin: 0 auto;
`;

const MeetingSettings = styled.div`
  display: flex;
  align-items: center;
`;

const SettingWrapper = styled.div`
  margin-left: 0.4rem;

  .MuiIconButton-root {
    color: #fff;
  }
`;

const MeetingUser = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: auto;
  color: #fff;
`;

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function LiveMeeting() {
  const [value, setValue] = useState(0);
  const [quoteSelected, setQuoteSelected] = useState(null);
  const [voted, setVoted] = useState(null);
  const [videoToggle, setVideoToggle] = useState(true);
  const [micToggle, setMicToggle] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>Reunión de consorcio en vivo. Vecindapp</title>
      </Head>
      <Header hasMenu={false}>
        <Title>Reunión</Title>
      </Header>
      <Main>
        <TabsHeaderWrapper>
          <AppBar color="initial" position="initial">
            <Tabs variant="fullWidth" value={value} onChange={handleChange}>
              <Tab label="Chat" {...a11yProps(0)} />
              <Tab label="Vecinos" {...a11yProps(1)} />
              <Tab label="Temas" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
        </TabsHeaderWrapper>
        <TabPanel value={value} index={0}>
          <ImageWrapper onClick={() => alert('Botón deshabilitado')}>
            <Image
              src="/images/screens/live-meeting/chat.png"
              alt=""
              width="361"
              height="534"
            />
          </ImageWrapper>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ImageWrapper onClick={() => alert('Botón deshabilitado')}>
            <Image
              src="/images/screens/live-meeting/vecinos.png"
              alt=""
              width="361"
              height="516"
            />
          </ImageWrapper>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TopicsList>
            <TopicItem>
              <article>
                <TopicTitle>Cortes de luz constantes</TopicTitle>

                <AccordionWrapper>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <AccordionTitle>Resumen</AccordionTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p>
                        Se corta la luz minimamente 3 veces por semana dejando
                        al edificio sin ascensor, sin agua entre otros
                        problemas. Se requiere la compra urgente de un grupo
                        electrógeno
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </AccordionWrapper>
                <VotingResults>
                  <VotingResultsTitle>
                    Votos de los integrantes
                  </VotingResultsTitle>
                  <ul>
                    <li>
                      <p>
                        Empresa Blackstone SRL:{' '}
                        <b>{voted === 'Blackstone SRL' ? '10' : '9'} votos</b>
                      </p>
                    </li>
                    <li>
                      <p>
                        Garbarino:{' '}
                        <b>{voted === 'Garbarino' ? '7' : '6'} votos</b>
                      </p>
                    </li>
                    <li>
                      <p>
                        Energy: <b>{voted === 'Energy' ? '6' : '5'} votos</b>
                      </p>
                    </li>
                  </ul>
                  <p>
                    <small>Votaron: {voted ? '21' : '20'}/40</small>
                  </p>
                </VotingResults>

                <Form
                  onSubmit={e => {
                    e.preventDefault();
                    setVoted(quoteSelected);
                  }}
                >
                  <FormControl component="fieldset">
                    <FormLegend>Votá una de las 3 opciones:</FormLegend>
                    <RadioGroup
                      aria-label="Opciones de presupuesto"
                      name="quote"
                      value={quoteSelected}
                      onChange={e => setQuoteSelected(e.target.value)}
                    >
                      <FormControlLabel
                        value="Blackstone SRL"
                        control={<Radio />}
                        label="Blackstone SRL: $89886"
                      />
                      <FormControlLabel
                        value="Garbarino"
                        control={<Radio />}
                        label="Garbarino: $90450"
                      />
                      <FormControlLabel
                        value="Energy"
                        control={<Radio />}
                        label="Energy: $92200"
                      />
                    </RadioGroup>
                  </FormControl>
                  <ButtonWrapper>
                    <Button
                      color="primary"
                      variant="contained"
                      disabled={!!voted}
                      type="submit"
                    >
                      Votar
                    </Button>
                  </ButtonWrapper>
                </Form>
              </article>
            </TopicItem>
          </TopicsList>
        </TabPanel>
        <MeetingControls>
          <Container>
            <MeetingSettings>
              <MeetingUser>José Martinez</MeetingUser>
              <SettingWrapper>
                <IconButton
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
                  aria-label={`${
                    micToggle ? 'Deshabilitar' : 'Habilitar'
                  } micrófono`}
                  onClick={() => setMicToggle(!micToggle)}
                >
                  {micToggle ? <MicIcon /> : <MicOffIcon />}
                </IconButton>
              </SettingWrapper>
              <SettingWrapper>
                <Button
                  color="secondary"
                  variant="contained"
                  component={CustomLink}
                  href="/reuniones?hoy=true"
                >
                  Salir
                </Button>
              </SettingWrapper>
            </MeetingSettings>
          </Container>
        </MeetingControls>
      </Main>
    </>
  );
}
