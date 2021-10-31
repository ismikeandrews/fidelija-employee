import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AuthService } from '../Services';
import Unprotected from './unprotected.routes';
import Protected from './protected.routes';
import { Login, Home, UserSearch, Voucher, Reader } from '../Pages';

const Index = () => {
    return <Redirect to="/"/>
}

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {AuthService.isAuthenticated() ? (
                    <>
                        <Protected path="/" exact component={Home}/>
                        <Protected path="/user/search/:id" component={UserSearch}/>
                        <Protected path="/voucher/:id" component={Voucher}/>
                        <Protected path="/reader" component={Reader}/>
                    </>
                ) : (
                    <Unprotected path="/" exact component={Login}/>
                )}
                <Route path="*" exact component={Index}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
