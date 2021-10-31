import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthService } from '../Services';

const Protected = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={
            (props) => {
                if(AuthService.isAuthenticated()){
                    return <Component {...props}/>
                }else{
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }
        }/>
    );
};

export default Protected;