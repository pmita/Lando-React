//importing our main sass file
import './styling/App.scss';
//importing our components
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
//importing everything react router related
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home}
          />
        </Switch>
    </Router>
    
    </>
  );
}

export default App;
