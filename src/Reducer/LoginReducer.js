import {SET_EMAIL, SET_PASSWORD} from '../ActionTypes/LoginAction'
export const LoginReducer = (state, action) => {
    if (action.type === SET_EMAIL)
        return { ...state, email: action.value }
    if (action.type === SET_PASSWORD)
        return { ...state, password: action.value }
    return state
}
