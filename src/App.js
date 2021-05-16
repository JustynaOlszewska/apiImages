import React, { lazy } from 'react';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import FetchState from "./context/fetch/FetchState";
import AlertState from "./context/alert/AlertState";
import ValidationState from "./context/validationForm/ValidationState";
import PaginateState from "./context/paginate/PaginateState";
const NotFound = lazy(() => import('./components/pages/NotFound'));
const HeaderSearch = lazy(() => import('./components/pages/HeaderSearch'));
const Main = lazy(() => import('./components/pages/Main'));
const Modal = lazy(() => import('./components/pages/Modal'));

const App = () => {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <div>
      <FetchState>
        <AlertState>
          <ValidationState>
            <PaginateState>
              <Switch location={background || location}>
                <Route exact path="/" component={HeaderSearch} />
                <Route path="/apiImages" component={HeaderSearch} />
                <Route path="/main" component={Main} />
                <Route component={NotFound} />
              </Switch>
              {background && <Route path="/photo/:id" children={<Modal />} />}
            </PaginateState>
          </ValidationState>
        </AlertState>
      </FetchState>
    </div>
  );
};

export default App;
