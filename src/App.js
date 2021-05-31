import React, { lazy, Suspense } from 'react';
import classes from './App.module.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './store/store';
import Navbar from './components/layout/Nav/Navbar';
import Home from './components/layout/Pages/Home/Home';
import Footer from './components/layout/Footer/Footer';
import Loader from './components/ui/Loader/Loader';
import TermsOfUse from './components/layout/Pages/TermsOfUse/TermsOfUse';
import PrivacyPolicy from './components/layout/Pages/PrivacyPolicy/PrivacyPolicy';

const UsedCars = lazy(() =>
  import('./components/layout/Pages/UsedCars/UsedCars')
);
const NewCars = lazy(() => import('./components/layout/Pages/NewCars/NewCars'));
const ProductPage = lazy(() =>
  import('./components/layout/Pages/ProductPage/ProductPage')
);

const App = () => {
  return (
    <Provider store={appStore}>
      <Suspense fallback={<Loader />}>
        <Router>
          <Navbar />
          <div className={classes.container}>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/used-cars' exact render={() => <UsedCars />} />
              <Route path='/new-cars' exact render={() => <NewCars />} />
              <Route path='/terms/terms-of-use' exact component={TermsOfUse} />
              <Route
                path='/terms/privacy-policy'
                exact
                component={PrivacyPolicy}
              />
              <Route
                path='/products/:productId'
                exact
                render={() => <ProductPage />}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Suspense>
    </Provider>
  );
};

export default App;
