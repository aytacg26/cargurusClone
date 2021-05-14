import classes from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Nav/Navbar';
import Home from './components/layout/Pages/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className={classes.container}>
        <Home />
      </div>
    </Router>
  );
};

export default App;
