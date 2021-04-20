import React, { useState } from 'react'
import style from './Profile.module.css'

export default function Profile() {

    const [personalDetail, setpersonalDetail] = useState({
        name: "Brandom",
        country: "USA",
        statename: "Micigan State Univerisity",
        imgUrl: null
    })
    const [socialInfo, setsocialInfo] = useState({
        rank: "Beginer",
        Phone: "006354522",
        mail:  "njacon@gmail.com",
        Facebook: "David Grey",
        Twitter: "@davidgrey"
    })


    return (
        <div className={style.profileoutercontainer}>
            <h3>Profile</h3>
            <div className={style.container}>
                <div className={style.innercontainer}>
                    <div className={style.upperdetails}>
                        <img width="30" src="https://i.pravatar.cc/300" alt="avatar" />
                        <h3> {personalDetail.name} </h3>
                        <h3> {personalDetail.country}</h3>
                        <p>
                            {personalDetail.statename}
                    </p>
                        <div>
                            <button className={style.bggreen}>Portfolio</button>
                            <button className={style.bggreen}>My Groups</button>
                        </div>

                    </div>

                </div>
                <div className={style.underline}>  </div>
                <div className={style.underline}>  </div>

                <div className={style.lower}>
                    <div className={style.row}>
                        <div className={style.fieldname}>Rank</div>
                        <div className={[style.fieldname, style.blkcolor].join(" ")}>{socialInfo.rank}</div>
                    </div>
                    <div className={style.row}>
                        <div className={style.fieldname}>Phone</div>
                        <div className={[style.fieldname, style.blkcolor].join(" ")}>{socialInfo.Phone}</div>
                    </div>

                    <div className={style.row}>
                        <div className={style.fieldname}>Email</div>
                        <div className={[style.fieldname, style.blkcolor].join(" ")}>{socialInfo.mail}</div>
                    </div>
                    <div className={style.row}>
                        <div className={style.fieldname}>Facebook</div>
                        <div className={[style.fieldname, style.bluecolor].join(" ")}>{socialInfo.Facebook}</div>
                    </div>

                    <div className={style.row}>
                        <div className={style.fieldname}>Twitter</div>
                        <div className={[style.fieldname, style.bluecolor].join(" ")}>{socialInfo.Twitter}</div>
                    </div>
          
          
                </div>
            </div>

        </div>
    )
}
