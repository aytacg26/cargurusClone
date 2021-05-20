import classes from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './store/store';
import Navbar from './components/layout/Nav/Navbar';
import Home from './components/layout/Pages/Home/Home';
import Footer from './components/layout/Footer/Footer';
import UsedCars from './components/layout/Pages/UsedCars/UsedCars';
import NewCars from './components/layout/Pages/NewCars/NewCars';

const App = () => {
  return (
    <Provider store={appStore}>
      <Router>
        <Navbar />
        <div className={classes.container}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/used-cars' exact component={UsedCars} />
            <Route path='/new-cars' exact component={NewCars} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
