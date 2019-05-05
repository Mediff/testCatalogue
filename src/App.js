import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Main from './pages/Main/Main';

const history = createHistory();

const App = () => (
    <Router history={history}>
        <Switch>
            <Route path='/' component={props => <Main {...props} />} />
            <Route path='/login' component={props => <Login {...props} />} />
            <Route path='/register' component={props => <Registration {...props} />} />
        </Switch>
    </Router>
);

export default App;
