import React, { useState, useContext, useEffect } from 'react';
import AppRouter from './components/AppRouter.jsx';
import CircularIndeterminate from './components/CircularIndeterminate.jsx';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import { CssBaseline } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Context } from './main.jsx';
import { checkAuth } from './http/userAPI.js';

const App = observer(() => {

  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth().then(data => {
      user.setUser(true);
      user.setIsAuth(true);
    }).finally(() => setLoading(false))
  }, [])

  if(loading) {
    return <CircularIndeterminate />
  }

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
});

export default App;
