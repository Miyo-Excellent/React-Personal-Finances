import React, { StrictMode } from 'react';
import { render as Render } from 'react-dom';
import App from 'App';
import * as serviceWorker from 'serviceWorker';

Render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
