import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './routes';

type Props = {
  rootPath?: string;
  history?: any;
};

const defaultHistory = createBrowserHistory();

const App = (props: Props) => {
  return (
    <Router history={props.history || defaultHistory}>
      <Routes />
    </Router>
  );
}

export default App;
