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
import { Location } from "./typesAppTS";
const NotFound = lazy(() => import('./components/pages/notFound/NotFound'));
const HeaderSearch = lazy(() => import('./components/pages/headerSearch/HeaderSearch'));
const Main = lazy(() => import('./components/pages/Main/Main'));
const Modal = lazy(() => import('./components/pages/modal/Modal'));

const App: React.FC = () => {
  const location: Location = useLocation();
  const background = location.state && location.state.background;

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
