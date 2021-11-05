import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AuthService } from '../Services';
import Unprotected from './unprotected.routes';
import Protected from './protected.routes';
import { Login, PointUser, UserSearch, Voucher, Reader, History, Redeem, Recover } from '../Pages';

const Index = () => {
    return <Redirect to="/"/>
}

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {AuthService.isAuthenticated() ? (
                    <>
                        <Protected path="/" exact component={History}/>
                        <Protected path="/user/search/:id" component={UserSearch}/>
                        <Protected path="/voucher/:id" component={Voucher}/>
                        <Protected path="/redeem" component={Redeem}/>
                        <Protected path="/reader" component={Reader}/>
                        <Protected path="/point-user" component={PointUser}/>
                    </>
                ) : (
                    <>
                        <Unprotected path="/" exact component={Login}/>
                        <Unprotected path="/recover" component={Recover}/>
                    </>
                )}
                <Route path="*" exact component={Index}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
