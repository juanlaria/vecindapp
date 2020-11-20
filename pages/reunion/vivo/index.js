import { useState } from 'react';
import Head from 'next/head';
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
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Header from '../../../components/Header';
import TabPanel from '../../../components/Tabs/TabPanel';

const Main = styled.main`
  padding: 0 0 1.2rem;
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function LiveMeeting() {
  const [value, setValue] = useState(0);
  const [quoteSelected, setQuoteSelected] = useState(null);

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
        <section>
          <AppBar position="sticky">
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Vecinos" {...a11yProps(0)} />
              <Tab label="Chat" {...a11yProps(1)} />
              <Tab label="Temas" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
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
                          Empresa Blackstone SRL: <b>5 votos</b>
                        </p>
                      </li>
                      <li>
                        <p>
                          Garbarino: <b>5 votos</b>
                        </p>
                      </li>
                      <li>
                        <p>
                          Energy: <b>5 votos</b>
                        </p>
                      </li>
                    </ul>
                    <p>
                      <small>Votaron: 20/40</small>
                    </p>
                  </VotingResults>

                  <Form>
                    <FormControl component="fieldset">
                      <FormLegend>Votá una de las 3 opciones:</FormLegend>
                      <RadioGroup
                        aria-label="Opciones de presupuesto"
                        name="quote"
                        value={quoteSelected}
                        onChange={(e) => setQuoteSelected(e.target.value)}
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
                      <Button color="primary" variant="contained" type="submit">
                        Votar
                      </Button>
                    </ButtonWrapper>
                  </Form>
                </article>
              </TopicItem>
            </TopicsList>
          </TabPanel>
        </section>
      </Main>
    </>
  );
}
