import React, { useState } from 'react'
import style from './Profile.module.css'
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

 function Profile(props) {
    return (
        <div className={style.profileoutercontainer}>
            <h3>Profile</h3>
            <div className={style.container}>
                <div className={style.innercontainer}>
                    <div className={style.upperdetails}>
                        <img width="30" src="https://i.pravatar.cc/300" alt="avatar" />
                        <h3> {props.userDetails.name} </h3>
                        <div>
                            <Link to={'/portfolio'}>
                                <button className={style.bggreen}>Portfolio</button>
                            </Link>
                            <Link to={'/forum'}>
                                <button className={style.bggreen}>My Groups</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={style.underline}>  </div>
                <div className={style.underline}>  </div>
                <div className={style.lower}>
                    <div className={style.row}>
                        <div className={style.fieldname}>Email</div>
                        <div className={[style.fieldname, style.blkcolor].join(" ")}>{props.userDetails.email}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    userDetails: state.authStore,
});


export default connect(mapStateToProps)(Profile);
