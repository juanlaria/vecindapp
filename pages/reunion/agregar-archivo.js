import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Modal } from '@material-ui/core';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';

import Header from '../../components/Header';

import { default as CustomLink } from '../../components/Link';

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

const Main = styled.main`
  padding: 1.5rem 0;
`;

const AttachmentButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
`;

const ImagesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: grid;
  grid-gap: 0.2rem;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.6rem 0;

  li {
    display: flex;
    flex-direction: column;
  }
`;

const ModalButton = styled.button`
  position: relative;
  box-shadow: ${props => (props.selected ? 'var(--elevation-z2)' : 'inherit')};
  display: flex;
  flex-direction: column;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #1148c2;
    opacity: 0.2;
    z-index: 1;
    display: ${props => (props.selected ? 'block' : 'none')};
  }

  & > * {
    width: 100%;
  }

  .image {
    object-fit: cover;
  }

  .checked {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    width: 1.2rem !important;
    height: 1.2rem !important;
    min-width: initial !important;
    min-width: initial !important;
    display: ${props => (props.selected ? 'block' : 'none')};
  }
`;

const ModalTitle = styled.h2`
  font-size: 1rem;
  padding: 1rem 1.4rem 0.6rem;
`;

const Breadcrumb = styled.p`
  font-size: 0.8rem;
  opacity: 0.9;
  padding: 0 1.4rem 0.4rem;
`;

const ActionsWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1.4rem 0.4rem;
`;

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: 0,
  },
}));

export default function AddFile() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const [open, setOpen] = useState(false);
  const [isImageSelected, setImageSelected] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Agregar archivo. Vecindapp</title>
      </Head>
      <Header hasMenu={false}>
        <Title>Agregar archivo</Title>
        <Subtitle>Tamaño máximo 256 KB (pdf, jpg, png)</Subtitle>
      </Header>
      <Main>
        <Container>
          <AttachmentButtonWrapper>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpen}
              startIcon={<PublishOutlinedIcon />}
            >
              Subir desde el dispositivo
            </Button>
          </AttachmentButtonWrapper>
          <AttachmentButtonWrapper>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpen}
              startIcon={<CameraAltOutlinedIcon />}
            >
              Tomar foto/video
            </Button>
          </AttachmentButtonWrapper>
          <AttachmentButtonWrapper>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpen}
              startIcon={<CloudUploadOutlinedIcon />}
            >
              Subir desde Google Drive
            </Button>
          </AttachmentButtonWrapper>
        </Container>
      </Main>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
        <div style={modalStyle} className={classes.paper}>
          <ModalTitle id="modal-title">Subir desde el dispositivo</ModalTitle>
          <ImagesList>
            <li>
              <ModalButton onClick={() => setImageSelected(!isImageSelected)}>
                <Image
                  src="https://via.placeholder.com/200x180"
                  alt=""
                  width="100"
                  height="90"
                  className="image"
                />
              </ModalButton>
            </li>
            <li>
              <ModalButton onClick={() => setImageSelected(!isImageSelected)}>
                <Image
                  src="https://via.placeholder.com/200x180"
                  alt=""
                  width="100"
                  height="90"
                  className="image"
                />
              </ModalButton>
            </li>
            <li>
              <ModalButton
                onClick={() => setImageSelected(!isImageSelected)}
                selected={isImageSelected}
              >
                <Image
                  src="https://via.placeholder.com/200x180"
                  alt=""
                  width="100"
                  height="90"
                  className="image"
                />
                <img
                  src="/images/icons/checked.svg"
                  alt=""
                  width="24"
                  height="24"
                  className="checked"
                />
              </ModalButton>
            </li>
          </ImagesList>
          <Breadcrumb>Mi unidad &gt; Fotos edificio</Breadcrumb>
          <ActionsWrapper>
            <Button
              component={CustomLink}
              color="primary"
              size="small"
              href="/reunion/agregar-tema?archivo=true"
            >
              Agregar
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={handleClose}
            >
              Cerrar
            </Button>
          </ActionsWrapper>
        </div>
      </Modal>
    </div>
  );
}
