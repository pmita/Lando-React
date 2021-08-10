//importing our main sass file
import './styling/App.scss';
//importing our components
import NavBar from './components/NavBar';
//importing everything react router related
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact />
        </Switch>
    </Router>
    
    </>
  );
}

export default App;
