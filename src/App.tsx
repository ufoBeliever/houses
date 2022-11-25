import React, { useState } from 'react';
import { Listings, Home, Listing, User, Host, NotFound } from './sections';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import { ToggleTheme } from './components';

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={darkTheme ? 'dark' : ''}>
        <ConfigProvider
          theme={{
            token: {
              colorText: 'var(--text-color-1)',
              colorTextTertiary: 'var(--text-color-2)',
              boxShadow: '10px 5px 5px red',
            },
          }}>
          <ToggleTheme />
          <BrowserRouter>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/listings/:location'
                element={<Listings title='Houses' />}
              />
              <Route
                path='/host'
                element={<Host />}
              />
              <Route
                path='/listing/:id'
                element={<Listing />}
              />
              <Route
                path='/user/:id'
                element={<User />}
              />
              <Route
                path='*'
                element={<NotFound />}
              />
            </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
