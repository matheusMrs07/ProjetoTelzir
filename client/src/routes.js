import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';


import Dashboard from './pages/dashboard';


import Users from './pages/users';
import UsersEditar from './pages/users/edit';
import UsersCadastrar from './pages/users/create';

import Prices from './pages/prices';
import PricesEdit from './pages/prices/edit';
import PricesCreate from './pages/prices/create';

import Plans from './pages/plans';
import PlansEdit from './pages/plans/edit';
import PlansCreate from './pages/plans/create';

import Cities from './pages/cities';
import CitiesEdit from './pages/cities/edit';
import CitiesCreate from './pages/cities/create';

import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/login/signup';


import PrivateRoute from './services/wAuth';


export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />

                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />

                <PrivateRoute path="/dashboard" exact component={Dashboard} />
                
                <PrivateRoute path="/users" exact component={Users} />
                <PrivateRoute path="/users/create" exact component={UsersCadastrar} />
                <PrivateRoute path="/users/edit/:idUser" exact component={UsersEditar} />

                <PrivateRoute path="/prices" exact component={Prices} />
                <PrivateRoute path="/prices/create" exact component={PricesCreate} />
                <PrivateRoute path="/prices/edit/:idPrice" exact component={PricesEdit} />

                <PrivateRoute path="/plans" exact component={Plans} />
                <PrivateRoute path="/plans/create" exact component={PlansCreate} />
                <PrivateRoute path="/plans/edit/:idPlan" exact component={PlansEdit} />
                
                <PrivateRoute path="/cities" exact component={Cities} />
                <PrivateRoute path="/cities/create" exact component={CitiesCreate} />
                <PrivateRoute path="/cities/edit/:idPlan" exact component={CitiesEdit} />

            </Switch>
        </BrowserRouter>
    )
}