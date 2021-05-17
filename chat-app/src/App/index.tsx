import Routes from '../routes';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { BASE_ROUTE } from "../constants/common";

import "../commonStyles/_common.scss";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={BASE_ROUTE}>
        <Routes />
      </BrowserRouter>
    </Provider>
  )
};

export default App;
