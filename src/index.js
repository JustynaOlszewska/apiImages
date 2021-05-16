import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import GlobalStyle from './styles/GlobalStyle';
import Spinner from './components/molecules/spinner/Spinner';
const App = lazy(() => import('./App'));

ReactDOM.render(

  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Suspense fallback={<Spinner />}>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

