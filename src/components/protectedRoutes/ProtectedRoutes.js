import React from 'react';
import Navbar from '../ui/navbar/Navbar';
import { Route,Redirect } from 'react-router-dom'


function ProtectedRoutes({ component : Component,loggedIn , ...rest}) {
    return (
        <Route
            {...rest}
            render={props => {
                console.log(loggedIn)
                if(loggedIn){
                    return  <>
                             <Navbar />
                             <Component {...props} />
                            </>
                }
                else{
                    return <Redirect to={
                        {
                            pathname : '/login',
                            state : {
                                from : props.location
                            }
                        }
                    }
                    />
                }
            }}
        />
    );
}

export default ProtectedRoutes;