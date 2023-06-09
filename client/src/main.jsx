import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import AnnouncementStore from './store/AnnouncementStore';
import NewsStore from './store/NewsStore';

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      announcement: new AnnouncementStore(),
      news: new NewsStore()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
)
