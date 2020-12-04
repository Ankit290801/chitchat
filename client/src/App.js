import { Container } from 'react-bootstrap';
import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import UpdateProfile from './components/UpdateProfile'
import ForgotPassword from './components/ForgotPassword'
import Homepage from './components/Homepage'
import Public from './components/Pubic'
import User from './components/User'
import Notify from './components/Notify'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
      <div className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth: "100%"}}>
        
          <Router>
        
              <Switch>
                <PrivateRoute exact path="/" component={Homepage} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                {/* <PrivateRoute path="/user" component={Public} />
                <PrivateRoute path="/public" component={User} /> */}
                <Route path="/user" component={Public} />
                <Route Path="/dashboard" component={Dashboard} />
                <Route Path="/notification" component={Notify} />
                <Route Path="/public" component={User} />
                
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route Path="/dashboard" component={Dashboard} />
              </Switch>
          </Router>
        </div>
      </div>
  );
}

export default App;
