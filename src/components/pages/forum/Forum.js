import React, {useEffect, useState} from 'react'
import style from './Forum.module.css'
import Allforum from "../allforum/Allforum";
import axios from "axios";

export default function Forum() {
    const [forums, setForums] = useState([])

    const getForums = async () => {
        const { data } = await axios.get('/forums');
        console.log('data', data.forums)
        setForums(data.forums)
    };

    useEffect(() => {
        getForums()
    }, [])

    return (
        <>
            <div className={style.forumcontainer}>
                <div className={style.cardcontainer}>
                    {
                        forums.map(forum => (
                            <div className={style.card} key={forum._id}>
                                <div className={style.cardtitle}>{forum.name}</div>
                                <p className={style.cardpara}>{forum.description}</p>
                                <button className={style.bgblue}>
                                    Go to Forum
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Allforum forums={forums}/>
     </>
    )
}
