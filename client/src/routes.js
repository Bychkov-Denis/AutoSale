import MainPage from './pages/MainPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import NewsSinglePage from './pages/NewsSinglePage.jsx';
import AnnouncementPage from './pages/AnnouncementPage.jsx';
import { ADMIN_ROUTE, ANNOUNCEMENT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, NEWS_ROUTE, REGISTRATION_ROUTE } from './utils/consts.js';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Element: AdminPage,
  },
]

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Element: MainPage,
  },
  {
    path: LOGIN_ROUTE,
    Element: AuthPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Element: AuthPage,
  },
  {
    path: NEWS_ROUTE,
    Element: NewsPage
  },
  {
    path: ANNOUNCEMENT_ROUTE + '/:id',
    Element: AnnouncementPage,
  },
  {
    path: NEWS_ROUTE + '/:id',
    Element: NewsSinglePage 
  }
]