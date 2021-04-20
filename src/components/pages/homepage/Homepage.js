import React,{useState} from 'react'
import style from './Homepage.module.css'

export default function Homepage() {

    const [univeristytable, setuniveristytable] = useState([
        { name: " univerisity of Micigan", fundname: "Micigin interactive investment", retrn: 25 },
        { name: " Chio states ", fundname: "Bucheve Capital", retrn: 22 },
        { name: " Micigan states ", fundname: "Student investent association", retrn: 22 },
        { name: " Chio states ", fundname: "Bucheve Capital", retrn: 22 },
    ]);
    const [forumPost, setforumPost] = useState([
        { postName: "New Poast", postContent: " Lorem Ipsum is simply dummy text of the printing and type" },
        { postName: "New Poast", postContent: " Lorem Ipsum is simply dummy text of the printing and type" },
        { postName: "New Poast", postContent: " Lorem Ipsum is simply dummy text of the printing and type" },
        { postName: "New Poast", postContent: " Lorem Ipsum is simply dummy text of the printing and type" },
        { postName: "New Poast", postContent: " Lorem Ipsum is simply dummy text of the printing and type" },
    ])

    return (
        <div className={style.HomepageContainer} >

            <div className={style.flexcontainer}>
                <div className={style.forumposts}>
                    <div className={style.forumtitle}>
                        FormPost
                  </div>
                    {
                        forumPost.map((post,index) => {
                          return  <div key={post.postName+index} className={style.forumcard}>
                                <div className={style.posttitle}>
                                    {post.postName}
                                 </div>
                                <p className={style.postcontent}>
                                    {post.postContent}
                                  </p>
                            </div>
                        })
                    }


                </div>
                <div className={style.forumtable}>
                    <div>
                        <table className={style.table}>
                           <tr  className={style.tr}>
                                    <th className={style.th} >University Name</th>
                                    <th className={style.th}> Name of Fund</th>
                                    <th className={[style.borderleftright, style.th].join(" ")}>Return</th>
                                </tr>

                            {
                                univeristytable.map((ele, index)=>{
                                 return   <tr key={ele.name+index} className={style.tr}>
                                    <td className={[style.borderright, style.td].join(" ")}>{ele.name}</td>
                                    <td className={style.td}>{ele.fundname} </td>
                                    <td className={[style.borderleftright, style.td].join(" ")}>{ele.retrn}%</td>
                                </tr>
        
                                })
                            }
                        </table>

                    </div>
                </div>

            </div>

        </div>
    )
}
