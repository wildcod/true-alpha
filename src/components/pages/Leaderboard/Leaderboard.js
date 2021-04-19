import React,{useState} from 'react'
import style from './Leaderdhip.module.css'

export default function Leaderboard() {
    
    const [leaderContent, setleaderContent] = useState([
        {rank:1 ,name: "Micigun", fundname: "Micigin interactive investment", percentage: 25},
        {rank:2 ,name: "Micigun", fundname: "Micigin interactive investment", percentage: 25},

        {rank:3 ,name: "Micigun", fundname: "Micigin interactive investment", percentage: 25},

        {rank:4 ,name: "Micigun", fundname: "Micigin interactive investment", percentage: 25},
        {rank:5 ,name: "Micigun", fundname: "Micigin interactive investment", percentage: 25},
        {rank:6 ,name: "Micigun", fundname: "Micigin interactive investment", percentage: 25},
        {rank:7 ,name: "Micigun", fundname: "Micigin interactive investment", percentage: 25},
        {rank:8 ,name: "Micigun", fundname: "Micigin interactive investment", percentage: 25},
        {rank:9 ,name: "Micigun", fundname: "Micigin interactive investment", percentage: 25},

    ])

    return (
        <div className={style.folio}>
            <h2>Leaderboard</h2>
            <div className={style.container}>

                <table className={style.table}>

                  {
                      leaderContent.map((ele, index)=>{
                            return                     <tr>
                            <td className={[style.td ,style.widthten].join(" ")}> {ele.rank} </td>
                            <td  className={style.td}>{ele.name}</td>
                            <td className={style.td}> {ele.fundname}</td>
                            <td className={[style.td, style.widthtr].join(" ")}>{ele.percentage}%</td>
                        </tr>
    
                      })
                  }


                </table>

            </div>
        </div>
    )
}
