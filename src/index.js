import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"; import GlobalStyle from './styles/GlobalStyle';

import Spinner from './components/modules/spinner/Spinner';
const App = lazy(() => import('./App'));

ReactDOM.render(

  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Suspense fallback={<Spinner />}>
        <App/>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

