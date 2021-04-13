import React, { useReducer } from 'react'
import Search from '../components/Search'
import VideoPlayer from 'react-video-js-player'
import Data from '../Videos/ProfileCss.mp4'
import Rating from '../components/HomeComponent/Rating'
import '../css/video.css'
import { BsFillHeartFill, BsHeart } from "react-icons/bs"
import { FaRegCommentDots } from "react-icons/fa"
import { LikeVideoReducer } from '../Reducer/LikeVideoReducer'
import { LIKE, DISLIKE } from '../ActionTypes/LikeVideoAction'
export const initialState = {
    likeVideoCount: 0,
    liked: false
}
function VideosScreen() {
    const [state, dispatch] = useReducer(LikeVideoReducer, initialState)
    const { likeVideoCount, liked } = state

    const toggleLikedVideo = () => {
        return liked ?
            (<><BsFillHeartFill onClick={() => dispatch({ type: DISLIKE })} className="like-indicator" /> : <span> {likeVideoCount}</span></>)
            : (<><BsHeart onClick={() => dispatch({ type: LIKE })} className="like-indicator" /> : <span>{likeVideoCount}</span></>)
    }
    const videos = [Data, Data, Data, Data, Data, Data, Data, Data]
    return (<div className="row">
        <Search />
        {
            videos.map((video, index) => {
                return (
                    <div key={index} className={`mt-3 ${index < 1 ? 'col-md-12' : 'col-md-4'}`}>
                        <div className={`card ${index < 1 ? 'video-large' : 'video-medium'}`} >
                            <div className="card-body">
                                <VideoPlayer
                                    src={video}
                                    poster="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/02/19/1581775754.jpeg"
                                />
                                <div className="video-description">
                                    <ul>
                                        <li>Mortal Kombat 2021</li>
                                        <li>
                                            <div className="desctiption-left">
                                                <span className="video-watch-count"> 2139 x ditonton </span>
                                                <span className="video-date badge badge-dark"> 2021-04-23</span>
                                            </div>

                                            <Rating />
                                            <div className="description-right">
                                                <FaRegCommentDots className="comment-indicator" /> <span className="mr-2"> : 219</span>
                                                {
                                                    toggleLikedVideo()
                                                }
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }

    </div >
    )
}

export default VideosScreen
