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
  padding: 1.2rem 0;
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

const Header = ({ hasMenu, active, children, window }) => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <header>
      <AppBar position="sticky">
        <Toolbar>
          <ToolbarInner>
            {hasMenu ? (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="go back"
                onClick={() => router.back()}
              >
                <ArrowBackIcon />
              </IconButton>
            )}
            <Content>{children}</Content>
            <IconButton
              aria-label="display more actions"
              edge="end"
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
            <NavList>
              <NavItem>
                <Button
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  <ButtonText>Consorcio</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  <ButtonText>Chat vecinal</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  <ButtonText>Agenda</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  color="primary"
                  component={CustomLink}
                  href="/reuniones"
                >
                  <ButtonText>Reuniones</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  <ButtonText>Expensas y gastos</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  <ButtonText>Novedades</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  <ButtonText>Mi perfil</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  <ButtonText>Ayuda</ButtonText>
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  color="primary"
                  onClick={() => alert('Botón deshabilitado')}
                >
                  <ButtonText>Cerrar sesión</ButtonText>
                </Button>
              </NavItem>
            </NavList>
          </Container>
        </DrawerNav>
      </Drawer>
    </header>
  );
};

Header.propTypes = {
  hasMenu: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  window: PropTypes.func,
  active: PropTypes.string,
};

Header.defaultProps = {
  hasMenu: true,
  window: undefined,
  children: undefined,
  active: undefined,
};

export default Header;
