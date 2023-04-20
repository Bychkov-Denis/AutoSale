import { Grid, Paper, TextField, Button, Stack, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { styled } from '@mui/system';
import { Link, useLocation }  from 'react-router-dom';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Context } from '../main';
import { login, registration } from '../http/userAPI';

const StyledPaper = styled(Paper)({
  padding: 20,
  height: "70vh",
  maxWidth: 300,
  margin: "30px auto"
});

const AuthPage = observer(() => {

  const { user } = useContext(Context);
  
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
      if(isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate(MAIN_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <Grid>
      <StyledPaper elevation={10}>
        <Grid align="center">
          <h2>{isLogin ? "Авторизация": "Регистрация"}</h2>
        </Grid>
        <TextField 
          label="Email" 
          placeholder='Введите Email' 
          fullWidth 
          required
          value={email}
          onChange={event => setEmail(event.target.value)}
        />  
        <TextField 
          type="password" 
          label="Пароль" 
          placeholder='Введите пароль' 
          fullWidth
          required
          value={password}
          onChange={event => setPassword(event.target.value)} 
          sx={{ mt: 2 }} 
        />
        <Stack spacing={2} sx={{ mt: 2 }}>
          {
            isLogin ?
            <Typography variant="p">
              Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрируйся!</Link>
            </Typography>
            :
            <Typography variant="p">
              Есть аккаунт? <Link to={LOGIN_ROUTE}>Войдите!</Link>
            </Typography>
          }
          <Button 
            type="submit" 
            color="primary" 
            variant="contained" 
            fullWidth
            onClick={click}
          >
            {isLogin ? "Войти" : "Регистрация"}
          </Button>
        </Stack>
      </StyledPaper>  
    </Grid>
  )
});

export default AuthPage;