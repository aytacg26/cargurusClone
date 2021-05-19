import classes from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Nav/Navbar';
import Home from './components/layout/Pages/Home/Home';
import Footer from './components/layout/Footer/Footer';
import UsedCars from './components/layout/Pages/UsedCars/UsedCars';
import NewCars from './components/layout/Pages/NewCars/NewCars';
import ByBody from './components/layout/SearchWindow/ByBody/ByBody';
import DropDown from './components/ui/DropDown/DropDown';

const App = () => {
  return (
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
  );
};

export default App;
