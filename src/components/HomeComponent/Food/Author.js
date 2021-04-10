import React, { useReducer } from 'react'
import { GiChefToque } from "react-icons/gi"
import { BsFillHeartFill, BsHeart } from "react-icons/bs"
import { LikeFoodReducer } from '../../../Reducer/LikeFoodReducer'
import { LIKE, DISLIKE } from '../../../ActionTypes/LikeFoodAction'

export const initialState = {
    likeFoodCount: 0,
    liked: false
}

function Author() {
    const [state, dispatch] = useReducer(LikeFoodReducer, initialState)
    const { likeFoodCount, liked } = state

    const toggleLikedFood = () => {
        return liked ?
            (<><BsFillHeartFill onClick={() => dispatch({ type: DISLIKE })} className="like-indicator" /> : { likeFoodCount}</>)
            : (<><BsHeart onClick={() => dispatch({ type: LIKE })} className="like-indicator" /> : { likeFoodCount}</>)
    }

    return (<>
        <ul className="author-detail">
            <li><GiChefToque className="mr-2" />Sigit Tunggul Waskito</li>
            <li>
                <p className="quote">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li><span className="badge badge-pill badge-secondary">2021-04-09</span></li>
            <li>
                {
                    toggleLikedFood()
                }
            </li>
        </ul>
        <hr />
    </>
    )
}

export default Author
