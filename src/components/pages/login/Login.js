import React, { useState, useEffect } from 'react'
import style from './Login.module.css'
import {Link} from 'react-router-dom'

import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { initiateLogin } from '../../../redux/actions/auth'

const Login = props => {
    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');
    const [ errorMessageStatus , setErrorMessageStatus ] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        if(props.loggedIn){
            props.history.push('/');
        }
        else if(props.errorStatus !== null){
            setErrorMessageStatus(true)
        }
    },[loginStatus]);


    const handleLogin = async(e) => {
        e.preventDefault();
        setErrorMessageStatus(false);
        setLoginStatus(true);
        console.log({
            email, password
        })
        await props.initiateLogin({email, password});
        setLoginStatus(false);
    };

    return <div>
        { errorMessageStatus &&
        <div className={style.loginStatus}>Login Failed</div>
        }
        <div className={style.loginBody}>
            <div className={style.loginContainer}>
                <div className={style.loginHead}>Login</div>
                <div className={style.loginMain}>
                    <form onSubmit={handleLogin}>
                        <input type="text" required className={style.input} name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" required className={style.input} placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <input type="submit" value="Submit" className={style.btn} />
                    </form>
                </div>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Link to={'/signup'}>
                Create Account
            </Link>
        </div>
    </div>
};

const mapStateToProps = state => ({
    loggedIn: state.authStore.loggedIn,
    errorStatus : state.errorStore.status
});


const mapActionToProps = () => {
    return {
        initiateLogin
    }
};

export default withRouter(connect(mapStateToProps,mapActionToProps())(Login));