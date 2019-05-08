import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Main from './pages/Main/Main';

const history = createBrowserHistory();

const App = () => (
    <Router history={history}>
        <Switch>
            <Route path='/login' component={props => <Login {...props} />} />
            <Route path='/register' component={props => <Registration {...props} />} />
            <Route path='/' component={props => <Main {...props} />} />
        </Switch>
    </Router>
);

export default App;
