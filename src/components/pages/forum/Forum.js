import React,{useState} from 'react'
import style from './Forum.module.css'

export default function Forum() {
    return (
        <div className={style.forumcontainer}>
            <div className={style.cardcontainer}>
                <div className={style.card}>
                    <div className={style.cardtitle}>Stock Pitches</div>
                    <p className={style.cardpara}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    <button className={style.bgblue}>
                        Go to Forum
                    </button>
                </div>
                <div className={style.card}>
                    <div className={style.cardtitle}>Stock Pitches</div>
                    <p className={style.cardpara}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    <button className={style.bgblue}>
                        Go to Forum
                    </button>
                </div>
                <div className={style.card}>
                    <div className={style.cardtitle}>Stock Pitches</div>
                    <p className={style.cardpara}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    <button className={style.bgblue}>
                        Go to Forum
                    </button>
                </div>

            </div>


        </div>
    )
}
