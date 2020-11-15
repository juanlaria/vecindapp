import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Container } from '@material-ui/core';


const Main = styled.main`
  padding: 1.2rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

export default function Meetings() {
  return (
    <>
      <Head>
        <title>Reunión de consorcio en vivo. Vecindapp</title>
      </Head>
      <Main>
        <Container>
          <Wrapper>
            <Title>Reunión de consorcio</Title>
          </Wrapper>
        </Container>
      </Main>
    </>
  );
}
