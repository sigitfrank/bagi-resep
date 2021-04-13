import { initialState } from '../Screens/VideosScreen'
import { LIKE, DISLIKE } from '../ActionTypes/LikeVideoAction'
export const LikeVideoReducer = (state = initialState, action) => {
    if (action.type === LIKE) {
        return {
            liked: true, likeVideoCount: state.likeVideoCount + 1
        }
    }
    if (action.type === DISLIKE) {
        return {
            liked: false, likeVideoCount: state.likeVideoCount - 1
        }
    }
    return state
}