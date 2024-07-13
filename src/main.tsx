import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { createTheme, MantineProvider, rem,  } from '@mantine/core';
import '@mantine/core/styles.css';
import { Provider } from 'react-redux';
import store from './redux/store';


const theme = createTheme({
  colors: {   
    primary: ['#ffff', '#FAFAFA', '#F6F6F6', '#F1F1F1', '#ECECEC', '#EBEBEB', '#ECECEC', '#F0EDED', '#AAAAAA', '#BBBBBB'],
    dark: ['#0E121A', '#171C26', '#222222', '#333333', '#444444', '#555555', '#666666', '#777777', '#888888', '#999999'],
  
  }, 
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },

 
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <MantineProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </MantineProvider>
  </Provider>
)
