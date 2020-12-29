import {React , useEffect} from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import UpdateProfile from './components/UpdateProfile'
import ForgotPassword from './components/ForgotPassword'
import Homepage from './components/Homepage'
import Info from './components/Info'

import {BrowserRouter as   Router, Switch, Route , useHistory} from 'react-router-dom' 
import PrivateRoute from './components/PrivateRoute'

function App() {
  
  
  

  return (
       //<div className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
       <div>
        <div className="" style={{maxWidth: "100%"}}>
                
          <Router>
        
              <Switch>
                <Route exact path="/" component={Homepage} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />               
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/info" component={Info} />
                <PrivateRoute path="/forgot-password" component={ForgotPassword} />
                <PrivateRoute Path="/dashboard" component={Dashboard} />
              </Switch>
          </Router>
        </div>
      </div>
  );
}

export default App;
