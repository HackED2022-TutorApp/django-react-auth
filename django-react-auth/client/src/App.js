import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './components/views/auth/Login';
import Signup from './components/views/auth/Signup';
import Logout from './components/views/auth/Logout';
import Dashboard from './components/views/app/Dashboard';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/login' component={Login} exact />
          <Route path='/signup' component={Signup} exact />
          <Route path='/logout' component={Logout} exact />
          <Route path='/dashboard' component={Dashboard} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;