import React, {useEffect, useState} from 'react'
import style from './Signup.module.css'
import {connect} from 'react-redux'
import { withRouter } from "react-router";
import {initiateSignup} from '../../../redux/actions/auth'
import {Link} from "react-router-dom";

const Signup = props => {

    const [ name, setName ] = useState('');
    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');
    const [ errorMessageStatus , setErrorMessageStatus ] = useState(false);
    const [ signUpStatus, setSignUpStatus] = useState(false);

    useEffect(() => {
        if(props.signedUp){
            props.history.push('/login');
        }else if(props.errorStatus !== null){
            setErrorMessageStatus(true)
        }
    },[signUpStatus]);


    const handleSubmit = async(e) => {
        e.preventDefault();
        setErrorMessageStatus(false);
        setSignUpStatus(true);
        console.log({
            name,email,password
        })
        await props.initiateSignup({name , email, password});
        setSignUpStatus(false);
    };

    return <div>
        { errorMessageStatus &&
        <div className={style.signedUpStatus}>SignUp Failed</div>
        }
        <div className={style.signupBody}>
            <div className={style.signupContainer}>
                <div className={style.signupHead}>Signup</div>
                <div className={style.signupMain}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" required className={style.input} name="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                        <input type="text" required className={style.input} placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" required className={style.input} placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <input type="submit" value="Submit" className={style.btn} />
                    </form>
                </div>
            </div>
        </div>
        <div style={{textAlign: 'center'}}>
            <Link to={'/login'}>
                Login
            </Link>
        </div>
    </div>
};

const mapStateToProps = state => ({
    signedUp: state.authStore.signedUp,
    errorStatus : state.errorStore.status
});


const mapActionToProps = () => {
    return {
        initiateSignup
    }
};

export default withRouter(connect(mapStateToProps,mapActionToProps())(Signup))