import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/index';
import { history, store } from './store/index';
import { Navbar } from './components/index';
import { ToastContainer, toast } from 'react-toastify';
import { LocalStorage } from './helpers';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const token = LocalStorage.getToken();
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <div
        >
          {
            token &&
            <Navbar/>
          }
          <Router history={ history } />
          <ToastContainer/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
