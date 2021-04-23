import Profile from './components/pages/Profile/Profile';
import Portfolio from './components/pages/portfolio/Portfolio.js';
import Forum from './components/pages/forum/Forum';
import Homepage from './components/pages/homepage/Homepage';
import { Route, Switch } from "react-router-dom";
import Leaderboard from './components/pages/Leaderboard/Leaderboard';
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import { connect } from 'react-redux'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <ProtectedRoutes path="/" exact component={Homepage} loggedIn={props.loggedIn}/>
          <ProtectedRoutes path="/portfolio" exact component={Portfolio} loggedIn={props.loggedIn} />
          <ProtectedRoutes path="/profile" exact component={Profile} loggedIn={props.loggedIn}/>
          <ProtectedRoutes path="/forum" exact component={Forum} loggedIn={props.loggedIn}/>
          <ProtectedRoutes path='/leader' exact component={Leaderboard} loggedIn={props.loggedIn}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
    loggedIn: state.authStore.loggedIn,
});


export default connect(mapStateToProps)(App);
