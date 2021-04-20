import React from 'react'
import style from './Navbar.module.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className={style.navbar}>
            <ul className={style.ulist}>
               <li className={style.logo}> <a href="#">LOGO </a> </li>
                <li><Link class="active" to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/leader">LeaderBoard</Link></li>
                <li><Link to="/forum">Forum</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
        </div>
    )
}
