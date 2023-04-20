import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { MAIN_ROUTE } from '../utils/consts';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {

  const { user } = useContext(Context);

  return (
    <Routes>
      {
        user.isAuth && authRoutes.map(({ path, Element }) => {
          return <Route key={path} path={path} element={<Element />} />
        })
      }
      {
        publicRoutes.map(({ path, Element }) => {
          return <Route key={path} path={path} element={<Element />} />
        })
      }
      <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
    </Routes>
  )
});

export default AppRouter;