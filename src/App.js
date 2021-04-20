import logo from './logo.svg';
import './App.css';
import Navbar from './components/ui/navbar/Navbar';
import Profile from './components/pages/Profile/Profile';
import Portfolio from './components/pages/portfolio/Portfolio.js';
import Forum from './components/pages/forum/Forum';
import Homepage from './components/pages/homepage/Homepage';

import { Route, Router, Switch } from "react-router-dom";
import Allforum from './components/pages/allforum/Allforum';
import Leaderboard from './components/pages/Leaderboard/Leaderboard';

function App() {
  return (
    <div className="App">

      
      <Navbar />
      <Allforum />
      <Switch>
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/forum" exact component={Forum} />
      <Route path="/homepage" exact component={Homepage} />
      <Route path='/leader' exact component={Leaderboard} />
      </Switch>
    </div>
  );
}

export default App;
