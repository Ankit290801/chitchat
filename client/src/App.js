import { Container } from 'react-bootstrap';
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import UpdateProfile from './components/UpdateProfile'
import ForgotPassword from './components/ForgotPassword'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth: "100%"}}>
          <Router>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
          </Router>
        </div>
      </Container>
  );
}

export default App;
