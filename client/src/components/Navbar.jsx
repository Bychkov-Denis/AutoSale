import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { AppBar, Toolbar, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import DrawerComponent from './DrawerComponent.jsx';
import { Context } from '../main.jsx';
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, NEWS_ROUTE, REGISTRATION_ROUTE } from '../utils/consts.js';

const NavLinksContainer = styled("div")({
  marginLeft: 10,
  display: "flex"
});

const NavLink = styled(Link)({
  fontSize: 18,
  textDecoration: "none",
  color: "white",
  marginLeft: 20,
  "&:hover": {
    borderBottom: "1px solid white",
    transform: "scale(1.1)"
  },
  transition: "all 0.2s ease-in"
});

const Navbar = observer(() => {

  const { user } = useContext(Context); 

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  }

  const theme = useTheme();
  const isMobile =  useMediaQuery(theme.breakpoints.down("md"));

  return (  
    <AppBar position="sticky">
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, cursor: "pointer" }}>
              AutoSale
            </Typography>
            {
              isMobile ? (
                <DrawerComponent />
              ) : (
                <NavLinksContainer>
                  <NavLink to={MAIN_ROUTE}>
                    Объявления
                  </NavLink>
                  <NavLink to={NEWS_ROUTE}>
                    Новости
                  </NavLink>
                  {
                    user.isAuth ? 
                    <>
                      <NavLink onClick={() => logOut()}>
                        Выйти
                      </NavLink>
                      <NavLink to={ADMIN_ROUTE}>
                        Админ панель  
                      </NavLink>
                    </>
                    :
                    <NavLink to={LOGIN_ROUTE}>
                        Авторизация
                    </NavLink>
                  }
                </NavLinksContainer>
              )
            }
          </Toolbar>
        </Container>
      </AppBar>
  )
})

export default Navbar;