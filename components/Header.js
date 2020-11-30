import { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  IconButton,
  AppBar,
  Toolbar,
  Drawer,
  Button,
  Container,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';

import { default as CustomLink } from './Link';

const ToolbarInner = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding: 0.8rem 0;
`;

const Content = styled.div`
  flex-grow: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0.8rem;
`;

const DrawerNav = styled.nav`
  width: 75vw;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 3rem 0 1.2rem;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.li`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 0.6rem;
  }
`;

const ButtonText = styled.span`
  text-align: left;
  flex: 1;
`;

const DrawerClose = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const SkipToContent = styled('div')`
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    position: absolute;
    top: 0;
    background: var(--color-black);
    color: var(--color-white);
    text-decoration: none;
    padding: 1rem;
    transform: translateY(-100%);
    transition: transform 0.3s;

    &:focus {
      transform: translateY(0%);
    }
  }
`;

const Header = ({ hasMenu, current, children, window }) => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar position="sticky">
        <SkipToContent>
          <a href="#main">Ir al contenido</a>
        </SkipToContent>
        <Toolbar>
          <ToolbarInner>
            {hasMenu ? (
              <IconButton
                color="inherit"
                aria-label="Menú"
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <IconButton
                color="inherit"
                aria-label="Página anterior"
                onClick={() => router.back()}
              >
                <ArrowBackIcon />
              </IconButton>
            )}
            <Content>{children}</Content>
            <IconButton
              aria-label="Notificaciones"
              color="inherit"
              onClick={() => alert('Botón deshabilitado')}
            >
              <NotificationsIcon />
            </IconButton>
          </ToolbarInner>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <DrawerNav>
          <Container>
            <DrawerClose>
              <IconButton
                color="inherit"
                aria-label="Cerrar menú"
                onClick={() => setIsDrawerOpen(false)}
              >
                <CloseIcon />
              </IconButton>
            </DrawerClose>
            <NavList>
              <NavItem>
                <Button
                  aria-current={current === 'home'}
                  color="primary"
                  component={CustomLink}
                  role="link"
                  href="/"
                >
                  <ButtonText>Home</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  aria-current={false}
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  <ButtonText>Consorcio</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  aria-current={false}
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  <ButtonText>Chat vecinal</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  aria-current={false}
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  <ButtonText>Agenda</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  aria-current={current === 'meetings'}
                  color="primary"
                  component={CustomLink}
                  role="link"
                  href="/reuniones"
                >
                  <ButtonText>Reuniones</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  aria-current={false}
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  <ButtonText>Expensas y gastos</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  aria-current={false}
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  <ButtonText>Novedades</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  aria-current={false}
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  <ButtonText>Mi perfil</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  aria-current={false}
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  <ButtonText>Ayuda</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  aria-current={false}
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  <ButtonText>Cerrar sesión</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  aria-current={current === ''}
                  color="primary"
                  component={CustomLink}
                  role="link"
                  href="/accesibilidad"
                >
                  <ButtonText>Accesibilidad</ButtonText>
                </Button>
              </NavItem>
            </NavList>
          </Container>
        </DrawerNav>
      </Drawer>
    </>
  );
};

Header.propTypes = {
  hasMenu: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  window: PropTypes.func,
  current: PropTypes.string,
};

Header.defaultProps = {
  hasMenu: true,
  window: undefined,
  children: undefined,
  current: undefined,
};

export default Header;
