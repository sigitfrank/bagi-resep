import { SET_COMMENT, CANCEL_COMMENT, SHOW_COMMENT_BUTTON, POST_COMMENT } from "../ActionTypes/CommentAction"
import { initialState } from "../components/ModalComponent/CommentModal"


export const CommentReducer = (state = initialState, action) => {
    if (action.type === SHOW_COMMENT_BUTTON)
        return { ...state, showButtonComment: true }
    if (action.type === SET_COMMENT)
        return { ...state, comment: action.value }
    if (action.type === POST_COMMENT)
        return { comment: initialState.comment, showButtonComment: false }
    if (action.type === CANCEL_COMMENT)
        return initialState
    return state
}