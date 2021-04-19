import React from 'react'
import style from './Profile.module.css'

export default function Profile() {
    return (
        <div className={style.profileoutercontainer}>
            <h3>Profile</h3>
            <div className={style.container}>
                <div className={style.innercontainer}>
                    <div className={style.upperdetails}>
                        <img width="30" src="https://i.pravatar.cc/300" alt="avatar" />
                        <h3> Brandon kung </h3>
                        <h3> Usa</h3>
                        <p>
                            Micigan state University
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
                        <div className={[style.fieldname , style.blkcolor].join(" ")}>Begiener</div>
                    </div>
                    <div className={style.row}>
                        <div className={style.fieldname}>Rank</div>
                        <div className={[style.fieldname , style.blkcolor].join(" ")}>Begiener</div>
                    </div>

                </div>
            </div>

        </div>
    )
}
