import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Unprotected from './unprotected.routes';
import Protected from './protected.routes'
import { Login, Home, UserSearch } from '../Pages';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Unprotected path="/" exact component={Login}/>
                <Protected path="/home" component={Home}/>
                <Protected path="/user/search/:id" component={UserSearch}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
