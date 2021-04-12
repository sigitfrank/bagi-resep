import { initialState } from '../components/HomeComponent/Author'
import { LIKE, DISLIKE } from '../ActionTypes/LikeFoodAction'
export const LikeFoodReducer = (state = initialState, action) => {
    if (action.type === LIKE) {
        console.log(state);
        return {
            liked: true, likeFoodCount: state.likeFoodCount + 1
        }
    }
    if (action.type === DISLIKE) {
        return {
            liked: false, likeFoodCount: state.likeFoodCount - 1
        }
    }
    return state
}