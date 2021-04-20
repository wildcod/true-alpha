import React, { useState, useEffect } from 'react'
import style from './Allforum.module.css';
import { Link } from 'react-router-dom';
import msgicon from '../../../assets/images/logos/comment-regular.svg'
import leftmsgicon from '../../../assets/images/logos/comments-regular.svg'
import moment from 'moment'

export default function Allforum({forums}) {

    const [allForums, setAllForums] = useState(forums);
    const [keyword, setKeyword] = useState('')

    const searchHandler = (e) => {
        const keyword = e.target.value;
        setKeyword(keyword)
        let matchedForums = null
        if(keyword && keyword.length){
             const regex = new RegExp(keyword, 'i')
             matchedForums = forums.filter(forum => regex.test(forum.name) || regex.test(forum.description))
            setAllForums(matchedForums);
        }else{
            setAllForums(forums);
        }
    };

    useEffect(() => {
        if(forums && forums.length){
            setAllForums(forums)
        }
    }, [forums])
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
                        <input placeholder="Search..." className={style.nav_search} onChange={(e) => searchHandler(e)}/>
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
                        </div>
                        <div className={style.topics}> Topic </div>
                        <div className={style.posts}> Posts</div>
                        <div className={style.fresshness}> Fresshness </div>
                    </div>

                <div className={style.underlinetwo}></div>

                <div className={style.cardcontainer}>
                    {
                        allForums.map(forum => (
                            <div className={style.card} key={forum._id}>
                                <div className={style.iconContainer}>
                                    <div className={style.icondiv}>
                                        <img className={style.lefticon} src={leftmsgicon} />
                                    </div>
                                </div>
                                <div className={style.forum}>
                                    <div className={style.posttitle}>
                                        {forum.name}
                                    </div>
                                    <p className={style.formcontentpara}>
                                        {forum.description}
                                    </p>
                                    <div className={style.readmore}>
                                        <Link className={style.readmorelink} to="/hsah">Read more</Link>
                                    </div>
                                </div>
                                <div className={style.topics}> 12 </div>
                                <div className={style.posts}>{forum.posts.length}</div>
                                <div className={style.fresshness}>{moment(forum.created_at).startOf('day').fromNow()}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={style.stline}> </div>
            <div className={style.recenttopics}>
                <div className={style.rtopictitle} >Recent Topic</div>
                <div className={style.runderline}></div>
                <div className={style.constiner}>
                    <div className={style.lists}>
                        <span className={style.icon}>
                       <img className={style.secicon} src={msgicon} /></span>
                        <span className={style.topic}>Recent Topics</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
