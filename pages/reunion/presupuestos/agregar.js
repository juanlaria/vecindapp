import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled';
import {
  Button,
  Container,
  TextField,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from '@material-ui/core';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import Header from '../../../components/Header';
import { default as CustomLink } from '../../../components/Link';

const Title = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  align-self: center;
  margin-top: auto;
`;

const Subtitle = styled.h2`
  font-size: 0.7rem;
  align-self: center;
  margin-bottom: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 1.4rem;
`;

const FormLegend = styled.legend`
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 0.6rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  input[type='checkbox'] {
    width: 0;
    padding: 0;
    margin: 0;
  }
`;

const Attachment = styled.section`
  display: flex;
  margin: 1rem 0 1.2rem;
`;

const ImageWrapper = styled.div``;

const AttachmentContent = styled.div`
  padding-left: 0.6rem;
`;

const AttachmentTitle = styled.p`
  font-size: 0.7rem;
  margin-top: 0;
  margin-bottom: 0.2rem;
`;

const AttachmentDescription = styled.p`
  font-size: 0.7rem;
  margin-top: 0;
  margin-bottom: 0.2rem;
`;

const AttachmentButtonWrapper = styled.div`
  opacity: 0.6;
`;

const AttachmentButtonInner = styled.span`
  flex: 1;
  text-align: left;
  font-size: 0.7rem;
  text-transform: none;
`;

const SubmitWrapper = styled(Container)`
  display: flex !important;
  flex-direction: column;
  margin-top: 2.5rem;
`;

const ButtonInner = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  text-transform: none;
`;

const ButtonText = styled.span`
  font-size: 0.8rem;
`;

const ButtonDisclaimer = styled.span`
  font-size: 0.7rem;
  opacity: 0.6;
  color: var(--color-black);
`;

const Disclaimer = styled.p`
  font-size: 0.6rem;
  color: #767070;
  margin: 1rem 0;
`;

export default function AddQuote() {
  const router = useRouter();
  // const hasUpcomingMeeting = true; // router.query?.nueva;

  const [hasAttachment, setAttachment] = useState(false);
  const [hasQuote, setQuote] = useState(false);

  useEffect(() => {
    if (router.query?.archivo) {
      setAttachment(true);
    }
    if (router.query?.presupuesto) {
      setQuote(true);
    }
  }, [router]);

  const [categories, setCategories] = useState({
    arreglos: true,
    propuestas: false,
    seguridad: false,
  });

  const { arreglos, propuestas, seguridad } = categories;

  return (
    <div>
      <Head>
        <title>Agregar presupuesto. Vecindapp</title>
      </Head>
      <Header hasMenu={false}>
        <Title>Agregar presupuesto</Title>
        <Subtitle>Tema: Cortes de luz constantes</Subtitle>
      </Header>
      <main id="main">
        <Form noValidate autoComplete="off">
          <Container>
            <Disclaimer>
              (*) Los campos con asterisco son obligatorios
            </Disclaimer>
            <InputWrapper>
              <TextField
                id="title"
                label="Nombre de la empresa/persona*"
                variant="filled"
              />
            </InputWrapper>
            <InputWrapper>
              <TextField
                id="description"
                variant="filled"
                label="Descripción*"
                multiline
                rows={4}
              />
            </InputWrapper>
            <InputWrapper>
              <TextField
                id="title"
                label="Monto*"
                placeholder="$10.000"
                variant="filled"
              />
            </InputWrapper>
            <InputWrapper>
              <Button
                color="primary"
                component={CustomLink}
                href="/reunion/presupuestos/agregar-archivo"
                startIcon={<ControlPointIcon />}
              >
                <ButtonInner>
                  <ButtonText>Agregar un archivo (pdf, jpg, png)</ButtonText>
                  <ButtonDisclaimer>Tamaño máximo 256 KB.</ButtonDisclaimer>
                </ButtonInner>
              </Button>
            </InputWrapper>
            {hasAttachment && (
              <Attachment>
                <ImageWrapper>
                  <Image
                    src="https://via.placeholder.com/200x180"
                    alt=""
                    width="100"
                    height="90"
                  />
                </ImageWrapper>
                <AttachmentContent>
                  <AttachmentTitle>DSC0010.jpg</AttachmentTitle>
                  <AttachmentDescription>125 KB</AttachmentDescription>
                  <AttachmentButtonWrapper>
                    <Button
                      size="small"
                      onClick={() => alert('Botón deshabilitado')}
                      startIcon={<CreateOutlinedIcon />}
                    >
                      <AttachmentButtonInner>
                        Editar nombre
                      </AttachmentButtonInner>
                    </Button>
                  </AttachmentButtonWrapper>
                  <AttachmentButtonWrapper>
                    <Button
                      size="small"
                      onClick={() => alert('Botón deshabilitado')}
                      startIcon={<DeleteOutlinedIcon />}
                    >
                      <AttachmentButtonInner>
                        Eliminar archivo
                      </AttachmentButtonInner>
                    </Button>
                  </AttachmentButtonWrapper>
                </AttachmentContent>
              </Attachment>
            )}
          </Container>
          <SubmitWrapper>
            <Button
              variant="contained"
              component={CustomLink}
              href="/reunion/agregar-tema?presupuesto=true"
              color="primary"
            >
              Proponer presupuesto
            </Button>
          </SubmitWrapper>
        </Form>
      </main>
    </div>
  );
}
