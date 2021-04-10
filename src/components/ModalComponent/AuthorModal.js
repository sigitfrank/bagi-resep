import React, { useReducer } from 'react'
import { BsFillHeartFill, BsHeart } from 'react-icons/bs'
import Rating from '../HomeComponent/Food/Rating'
import { LikeFoodReducer } from '../../Reducer/LikeFoodReducer'
import { LIKE, DISLIKE } from '../../ActionTypes/LikeFoodAction'
const initialState = {
    likeFoodCount: 0,
    liked: false
}
function AuthorModal() {
    const [state, dispatch] = useReducer(LikeFoodReducer, initialState)
    const { likeFoodCount, liked } = state

    const toggleLikedFood = () => {
        return liked ?
            (<><BsFillHeartFill onClick={() => dispatch({ type: DISLIKE })} className="like-indicator" /> : { likeFoodCount}</>)
            : (<><BsHeart onClick={() => dispatch({ type: LIKE })} className="like-indicator" /> : { likeFoodCount}</>)
    }

    return (<>
        <section>
            <div className="row">
                <div className="col-6">
                    <p className="modal-author mb-2">Sigit Tunggul Waskito</p>
                    <p className="quote">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                <div className="col-6 text-right">
                    <span className="modal-date badge badge-pill badge-secondary">2021-4-09</span>
                    <div className="modal-ratings mt-2">
                        <Rating />
                    </div>
                    <div className="like-container">
                        {
                            toggleLikedFood()
                        }
                    </div>
                </div>
            </div>
            <hr />
            <p className="modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, illum iusto! Dignissimos voluptas possimus facere rem, nemo architecto incidunt vero!</p>
        </section>
        <hr />
    </>
    )
}

export default AuthorModal
