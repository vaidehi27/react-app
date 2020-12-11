import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

declare let window: any;

interface ShellRegisterParams {
  history: any;
  containerId: string;
}

if (window.shell) {
  window.shell.register('react', {
    install: ({ history, containerId }: ShellRegisterParams): void => {
      console.log('containerId', containerId, document.getElementById(containerId))
      ReactDOM.render(
        <App history={history} />,
        document.getElementById(containerId)
      );
    },
    teardown: (containerId: string) => {
      const container = document.getElementById(containerId);
      ReactDOM.unmountComponentAtNode(container as HTMLElement);
    }
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
