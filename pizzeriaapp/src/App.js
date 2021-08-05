import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Order from './pages/Order';
import Build from './pages/Build';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/order" component={Order}></Route>
          <Route path="/build" component={Build}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
