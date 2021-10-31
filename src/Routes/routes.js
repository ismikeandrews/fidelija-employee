import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Unprotected from './unprotected.routes';
import Protected from './protected.routes'
import { Login, Home, UserSearch, Voucher } from '../Pages';

const Index = () => {
    return <Redirect to="/"/>
}

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Unprotected path="/" exact component={Login}/>
                <Protected path="/home" component={Home}/>
                <Protected path="/user/search/:id" component={UserSearch}/>
                <Protected path="/voucher/:id" component={Voucher}/>
                <Route path="*" exact component={Index}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
