import React,{useState} from 'react'
import style from './Portfolio.module.css'

export default function Portfolio() {
    const [portfolio, setportfolio] = useState([
        {name:"Calmaine Food Inc ", ticker:"CALM" , returnPerc:25},
        {name:"Calmaine Food Inc ", ticker:"CALM" , returnPerc:25},
        {name:" Food Inc ", ticker:"CALM" , returnPerc:25},
        {name:"Calmaine Food Inc ", ticker:"CALM" , returnPerc:25},
        {name:"Calmaine Food Inc ", ticker:"CALM" , returnPerc:25},
        {name:"Calmaine Food Inc ", ticker:"CALM" , returnPerc:25},
        {name:"Calmaine Food Inc ", ticker:"CALM" , returnPerc:25},
        {name:"Calmaine Food Inc ", ticker:"CALM" , returnPerc:25},
    ])
    return (
        <div className={style.folio}>
            <h2>Portfolio</h2>
            <div className={style.container}>
                <table className={style.table}>
                    <tr>
                        <th className={[style.firstcol , style.th].join(" ")}>Firstname</th>
                        <th className={style.th}>Lastname</th>
                        <th className={style.th}>Savings</th>
                    </tr>
                    {
                        portfolio.map((ele,index)=>{
                            return                     <tr>
                            <td className={style.td}>{ele.name}</td>
                            <td className={style.td}> {ele.ticker} </td>
                            <td className={style.td}>{ele.returnPerc}% </td>
                        </tr>
                        })
                    }
                    
                </table>

            </div>
        </div>
    )
}
