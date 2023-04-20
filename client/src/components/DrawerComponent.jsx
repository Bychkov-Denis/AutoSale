import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Context } from '../main';
 
const NavLink = styled(Link)({
  fontSize: 18,
  textDecoration: "none",
  fontWeight: "bold",
  color: "#1976D2",
  "&:hover": {
    borderBottom: "1px solid white",
    transform: "scale(1.1)"
  },
  transition: "all 0.3s ease-in"
});

const DrawerComponent = observer(() => {

  const [openDrawer, setOpenDrawer] = useState(false);

  const { user } = useContext(Context);

  const closeDrawer = () => {
    setOpenDrawer(false);
  }

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={closeDrawer}
      >
        <List>
           <ListItem onClick={closeDrawer}>
              <ListItemText>
                <NavLink to="/">Объявления</NavLink>
              </ListItemText>
            </ListItem>
            <ListItem onClick={closeDrawer}>
              <ListItemText>
                <NavLink to="/news">Новости</NavLink>
              </ListItemText>
            </ListItem>
            {
                user.isAuth ? 
                <>
                  <ListItem onClick={closeDrawer}>
                    <ListItemText>
                      <NavLink to="/registration">Выйти</NavLink>
                    </ListItemText>
                  </ListItem>
                  <ListItem onClick={closeDrawer}>
                    <ListItemText>
                      <NavLink to="/admin">Админ панель</NavLink>
                    </ListItemText>
                  </ListItem>
                </>
                :
                <ListItem onClick={closeDrawer}>
                  <ListItemText>
                    <NavLink to="/registration">Авторизация</NavLink>
                  </ListItemText>
                </ListItem>
              }
          </List>
      </Drawer>
      <IconButton color="inherit" onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  )
})

export default DrawerComponent; 