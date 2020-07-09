import React,{Fragment,useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/layout/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';
//Implementing redux
import {Provider} from 'react-redux';
import store from './store';


if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App=() => {
  useEffect(()=>{
    store.dispatch(loadUser());
  },[])
  return (
    <Provider store={store}>
    <Router>
    <Fragment>
    <Navbar/>
      <Route exact path="/" component={Home} />
      <Alert/>
      <Switch>
       <Route exact path="/login" component={Login} />
       <Route exact path="/signup" component={Signup} />
      </Switch>
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
