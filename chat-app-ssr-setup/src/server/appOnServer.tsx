import Routes from '../routes';
import React from 'react';
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import getHtmlToRender from './getHtmlToRender';
import { Provider } from 'react-redux';
import store from '../store';

const AppOnServer = (): string => {
  const App = () =>
    <Provider store={store}>
      <StaticRouter context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>;
  
  const jsx = renderToString(<App />);
  const html = getHtmlToRender(jsx);
  return html;
};


export default AppOnServer;