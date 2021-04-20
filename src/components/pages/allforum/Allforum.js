import React, { useState, useEffect } from 'react'
import style from './Allforum.module.css';
import { Link } from 'react-router-dom';
import msgicon from '../../../assets/images/logos/comment-regular.svg'
import leftmsgicon from '../../../assets/images/logos/comments-regular.svg'

export default function Allforum() {

    const [posts, setposts] = useState()

    return (
        <div className={style.allforumcontainer}>
            <div className={style.topicscontainer}>
                <div className={style.headingcontainer}>
                    <span className={style.headingitem}>
                        All Forums
                    </span>
                    <span className={style.headingitem}>
                        Topics
                    </span>
                </div>
                <div className={style.underline}></div>

                <div className={style.searchcontainer}>
                    <div className={style.search} >
                        <input placeholder="Search..." className={style.nav_search} />
                        <span class={style.searchicon}>

                            <i class="fa fa-search"></i>
                        </span>
                    </div>
                </div>
                <div className={style.underlinetwo}></div>
                <div className={style.card}>
                        <div className={style.iconContainer}>

                        </div>
                        <div className={style.forum}>
                            <div className={style.posttitle}>
                                Forum
                            </div>
                            {/* <p className={style.formcontentpara}>
                                Lorem imsum dolor sit amet,
                                consecttuto adipiscing elit , des og ajjdfj, dkflj...
                            <div className={style.readmore}>
                                    <Link className={style.readmorelink} to="/hsah">Read more</Link>
                                </div>
                            </p> */}
                        </div>
                        <div className={style.topics}> Topic </div>
                        <div className={style.posts}> Posts</div>
                        <div className={style.fresshness}> Fresshness </div>
                    </div>

                <div className={style.underlinetwo}></div>

                <div className={style.cardcontainer}>
                    <div className={style.card}>
                        <div className={style.iconContainer}>
                            <div className={style.icondiv}>
                            <img className={style.lefticon} src={leftmsgicon} />
                            </div>
                        </div>
                        <div className={style.forum}>
                            <div className={style.posttitle}>
                                BackpackerClub
                            </div>
                            <p className={style.formcontentpara}>
                                Lorem imsum dolor sit amet,
                                consecttuto adipiscing elit , des og ajjdfj, dkflj...
                            <div className={style.readmore}>
                                    <Link className={style.readmorelink} to="/hsah">Read more</Link>
                                </div>
                            </p>
                        </div>
                        <div className={style.topics}> 12 </div>
                        <div className={style.posts}> 30</div>
                        <div className={style.fresshness}> 6 days 15 hour </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.iconContainer}>
                            <div className={style.icondiv}>
                            <img className={style.lefticon} src={leftmsgicon} />
                            </div>
                        </div>
                        <div className={style.forum}>
                            <div className={style.posttitle}>
                                BackpackerClub
                            </div>
                            <p className={style.formcontentpara}>
                                Lorem imsum dolor sit amet,
                                consecttuto adipiscing elit , des og ajjdfj, dkflj...
                            <div className={style.readmore}>
                                    <Link className={style.readmorelink} to="/hsah">Read more</Link>
                                </div>
                            </p>
                        </div>
                        <div className={style.topics}> 12 </div>
                        <div className={style.posts}> 30</div>
                        <div className={style.fresshness}> 6 days 15 hour </div>
                    </div>


                </div>

            </div>
            <div className={style.stline}> </div>
            <div className={style.recenttopics}>
                <div className={style.rtopictitle} >Recent Topic</div>
                <div className={style.runderline}></div>
                <div className={style.constiner}>
                    <div className={style.lists}>
                        <span className={style.icon}>
                       <img className={style.secicon} src={msgicon} />
</span>
                        <span className={style.topic}>Youtube insertion</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
