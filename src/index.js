import React  from 'react';
import { render as Render } from 'react-dom';
import App from 'App';
import * as serviceWorker from 'serviceWorker';

Render(<App />, document.getElementById('root'));

serviceWorker.unregister();
