import React, {useEffect, useState} from 'react'
import style from './Homepage.module.css'
import axios from "axios";
import {connect} from "react-redux";

function Homepage(props) {
    const [investmentClubs, setInvestmentClub] = useState([])
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        let posts = [];
        const clubData = await axios.get(`/investment-club/${props.userId}`);
        console.log(clubData);
        if(clubData.status === 200 && clubData.data && clubData.data.length){
            const forum = await axios.get(`/forums/${clubData?.data?.clubs[0]?.forum_id}`);
            if(forum && forum.status === 200){
                setPosts(forum.data.forum.posts)
            }
            setInvestmentClub(clubData.data.clubs)
            console.log(clubData, forum);
        }
        setIsLoading(false)
    };
    console.log(investmentClubs, posts)
    useEffect(() => {
         fetchData()
    }, []);

    return (
        <div>
            {
                isLoading ? <div style={{ margin: '20px', textAlign: 'center'}}>Loading...</div>
                    :
                    <div className={style.HomepageContainer} >
                        <div className={style.flexcontainer}>
                            <div className={style.forumposts}>
                                <div className={style.forumtitle}>
                                    Forum Posts
                                </div>
                                {
                                    posts.map((post) => {
                                        return  <div key={post._id} className={style.forumcard}>
                                            <div className={style.posttitle}>
                                                {post.title}
                                            </div>
                                            <p className={style.postcontent}>
                                                {post.text}
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
                                            investmentClubs.map((club)=>{
                                                return   <tr key={club._id} className={style.tr}>
                                                    <td className={[style.borderright, style.td].join(" ")}>{club.university_name}</td>
                                                    <td className={style.td}>{club.fund_name} </td>
                                                    <td className={[style.borderleftright, style.td].join(" ")}>{club.fund_returns}%</td>
                                                </tr>

                                            })
                                        }
                                    </table>
                                    {
                                        !investmentClubs || !investmentClubs.length ?
                                            <p style={{textAlign: 'center'}}>No Data</p> : null
                                    }

                                </div>
                            </div>

                        </div>

                    </div>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    userId: state.authStore._id,
});


export default connect(mapStateToProps)(Homepage);
