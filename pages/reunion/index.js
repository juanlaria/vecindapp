import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Container, Button, Chip } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

import Topic from '../../components/Topic';
import Header from '../../components/Header';
import { default as CustomLink } from '../../components/Link';

const Main = styled.main`
  h2 {
    font-size: 1rem;
    margin: 1.8rem auto;
    text-align: center;
    text-transform: uppercase;
  }

  .filter-header {
    padding-bottom: 1.4rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);

    h2 {
      font-size: 0.8rem;
      margin-bottom: 0.4rem;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 -0.4rem;
    }

    li {
      margin: 0.4rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .topics-results-title {
    font-size: 0.7rem;
    opacity: 0.75;
    margin: 1rem auto 0;
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 1.8rem;

  display: flex;
  flex-direction: column;
`;

const HeaderTitle = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  align-self: center;
`;

const topicsData = [
  {
    title: 'Humedad en el hall de entrada',
    description:
      'Debemos revisar con un plomero y arreglar la humedad en el hall',
    author: 'Matías M.',
    category: 'arreglos',
    votes: 4,
  },
  {
    title: 'Hechos de inseguridad',
    description: 'Propongo que instalemos una cámara de seguridad.',
    author: 'Laura T.',
    category: 'seguridad',
    votes: 2,
  },
];

export default function Topics() {
  const router = useRouter();

  const [newTopicVisible, setNewTopicVisible] = useState(false);
  const [liveMeeting, setLiveMeeting] = useState(false);
  const [filteredTopics, setFilteredTopics] = useState(topicsData);

  useEffect(() => {
    if (router.query?.tema) {
      setNewTopicVisible(true);
    }
    if (router.query?.vivo) {
      setLiveMeeting(true);
    }
  }, [router]);

  const handleFilterChange = category => {
    let newFilteredTopics = filteredTopics;

    if (filteredTopics.some(topic => topic.category === category)) {
      newFilteredTopics = filteredTopics.filter(
        topic => topic.category !== category
      );
    } else {
      const topicsToAdd = topicsData.filter(
        topic => topic.category === category
      );
      if (topicsToAdd.length) {
        topicsToAdd.forEach(topic => {
          newFilteredTopics.push(topic);
        });
      }
    }
    setFilteredTopics(JSON.parse(JSON.stringify(newFilteredTopics)));
  };

  return (
    <div>
      <Head>
        <title>Lista de temas. Vecindapp</title>
      </Head>
      <Header hasMenu={false}>
        <HeaderTitle>Reunión de consorcio</HeaderTitle>
      </Header>
      <Main id="main">
        {liveMeeting && (
          <Container>
            <ButtonWrapper>
              <Button
                variant="contained"
                color="secondary"
                component={CustomLink}
                href="/reunion/vivo"
              >
                Ir a la reunión en vivo
              </Button>
            </ButtonWrapper>
          </Container>
        )}
        <h2>Lista de temas</h2>
        <section>
          <div className="filter-header">
            <Container>
              <h2>Filtrá por categoría</h2>
              <ul>
                <li>
                  <Chip
                    label="Arreglos"
                    aria-label={'Quitar Arreglos'}
                    onClick={() => handleFilterChange('arreglos')}
                    onDelete={() => handleFilterChange('arreglos')}
                    deleteIcon={
                      filteredTopics.some(
                        topic => topic.category === 'arreglos'
                      ) ? (
                        <DoneIcon />
                      ) : (
                        <></>
                      )
                    }
                    color={
                      filteredTopics.some(
                        topic => topic.category === 'arreglos'
                      )
                        ? 'primary'
                        : 'initial'
                    }
                  />
                </li>
                <li>
                  <Chip
                    label="Propuestas"
                    aria-label={'Quitar Propuestas'}
                    onClick={() => handleFilterChange('propuestas')}
                    onDelete={() => handleFilterChange('propuestas')}
                    deleteIcon={
                      filteredTopics.some(
                        topic => topic.category === 'propuestas'
                      ) ? (
                        <DoneIcon />
                      ) : (
                        <></>
                      )
                    }
                    color={
                      filteredTopics.some(
                        topic => topic.category === 'propuestas'
                      )
                        ? 'primary'
                        : 'initial'
                    }
                  />
                </li>
                <li>
                  <Chip
                    label="Seguridad"
                    aria-label={'Quitar Seguridad'}
                    onClick={() => handleFilterChange('seguridad')}
                    onDelete={() => handleFilterChange('seguridad')}
                    deleteIcon={
                      filteredTopics.some(
                        topic => topic.category === 'seguridad'
                      ) ? (
                        <DoneIcon />
                      ) : (
                        <></>
                      )
                    }
                    color={
                      filteredTopics.some(
                        topic => topic.category === 'seguridad'
                      )
                        ? 'primary'
                        : 'initial'
                    }
                  />
                </li>
              </ul>
              <p className="topics-results-title" aria-live="polite">
                Mostrando {filteredTopics.length} resultado{filteredTopics.length === 1 ? '' : 's'}
              </p>
            </Container>
          </div>
          <ul className="topics-list">
            {newTopicVisible && (
              <li>
                <Topic
                  title="Cortes de luz constantes"
                  description="Se corta la luz minimamente 3 veces por semana dejando al edificio sin ascensor, sin agua. Propongo la compra urgente de un grupo electrógeno como solución."
                  author="José M."
                  votes={0}
                  category={'propuestas'}
                />
              </li>
            )}
            {filteredTopics.map(topic => (
              <li>
                <Topic {...topic} />
              </li>
            ))}
          </ul>
        </section>
        <Container>
          <ButtonWrapper>
            <Button
              variant="contained"
              color="primary"
              component={CustomLink}
              href="/reunion/agregar-tema"
            >
              Agregar tema
            </Button>
          </ButtonWrapper>
        </Container>
      </Main>
    </div>
  );
}
