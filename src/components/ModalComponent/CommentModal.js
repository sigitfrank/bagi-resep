import React, { useReducer } from 'react'
import { SET_COMMENT, CANCEL_COMMENT, SHOW_COMMENT_BUTTON, POST_COMMENT } from '../../ActionTypes/CommentAction'
import { CommentReducer } from '../../Reducer/CommentReducer'

export const initialState = {
    comment: '',
    showButtonComment: false,
}

function CommentModal() {
    const [state, dispatch] = useReducer(CommentReducer, initialState)
    const { comment, showButtonComment } = state

    const toggleButtonComment = () => {
        if (showButtonComment)
            return (<div className="text-right mt-2">
                <button className="btn btn-dark mr-2" onClick={() => dispatch({ type: CANCEL_COMMENT })}>Batalkan</button>
                <button className="btn btn-primary" onClick={() => dispatch({ type: POST_COMMENT })}>Komentar</button>
            </div>
            )
    }


    return (<section>
        <ul>
            <li>
                <div className="d-flex align-items-center my-3">
                    <img src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" alt="user-profile" className="modal-user-profile" />
                    <p className="modal-comment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque asperiores nesciunt officiis, recusandae repudiandae natus aliquam quia assumenda dignissimos quasi atque est eligendi at modi magni? Aut necessitatibus cumque labore, nobis excepturi a fugiat repudiandae rerum explicabo at eos sapiente temporibus aspernatur quos vero impedit odio dolor veritatis nam eligendi, accusantium natus! Debitis eaque delectus doloribus et, eveniet magni error.</p>
                </div>
                <div className="d-flex align-items-center my-3">
                    <img src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" alt="user-profile" className="modal-user-profile" />
                    <p className="modal-comment">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, quos.</p>
                </div>
            </li>
            <input type="text" value={comment} className="form-control input-comment" onChange={(event) => dispatch({ type: SET_COMMENT, value: event.target.value })} placeholder="tulis komentar..." onFocus={() => dispatch({ type: SHOW_COMMENT_BUTTON })} />
            {
                toggleButtonComment()
            }
        </ul>
    </section>
    )
}

export default CommentModal
