import Head from 'next/head';
import styled from '@emotion/styled';
import { Container } from '@material-ui/core';

import Header from '../components/Header';

const Main = styled.main`
  padding: 1.2rem 0;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 1rem 0;
`;

const UnorderedList = styled.ul`
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 1rem 0;
`;

export default function Accesibility() {
  return (
    <>
      <Head>
        <title>Declaración de conformidad. Vecindapp</title>
      </Head>
      <Header hasMenu={false} />
      <Main id="main">
        <Container>
          <Title>Declaración de conformidad</Title>
          <Text>
            Vecindapp está comprometida a asegurar la accesibilidad digital para
            gente con discapacidades. Continuamente mejoramos la experiencia de
            usuario para todos, aplicando estándares de accesibilidad
            relevantes.
          </Text>
          <Subtitle>Estatus de conformidad</Subtitle>
          <Text>
            Las{' '}
            <a
              href="https://www.w3.org/WAI/standards-guidelines/wcag/es"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pautas de Accesibilidad para el Contenido Web (WCAG)
            </a>
            definen requerimientos para que diseñadores y desarrolladores
            mejoren la accesibilidad para gente con discapacidades. Define tre
            niveles de conformidad: Nivel A, Nivel AA y Nivel AAA. Vecindapp
            cumple totalmente con el Nivel AA de las pautas WCAG 2.1. "Cumple
            totalmente" significa que el contenido cumple con los estándares de
            accesibilidad sin excepciones.
          </Text>
          <Subtitle>Feedback</Subtitle>
          <Text>
            Agradecemos sus comentarios sobre la accesibilidad de Vecindapp. Por
            favor hacenos saber si encontrás barreras de accesibilidad en
            Vecindapp:
          </Text>
          <UnorderedList>
            <li>Teléfono: +549110303456</li>
            <li>
              E-mail:{' '}
              <a href="mailto:accesibilidad@vecindapp.co">
                accesibilidad@vecindapp.co
              </a>
            </li>
            <li>Dirección: Balcarce 50, Ciudad Autónoma de Buenos Aires</li>
            <li>Código postal: 1064</li>
          </UnorderedList>
          <Text>
            Esta Declaración fue creada el día 28 de Noviembre de 2020 usando{' '}
            <a href="https://www.w3.org/WAI/planning/statements/">
              W3C Accessibility Statement Generator Tool
            </a>
            .
          </Text>
        </Container>
      </Main>
    </>
  );
}
