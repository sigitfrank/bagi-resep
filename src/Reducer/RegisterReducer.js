import {SET_EMAIL, SET_PASSWORD} from '../ActionTypes/RegisterAction'
export const RegisterReducer = (state, action) => {
    if (action.type === SET_EMAIL)
        return { ...state, email: action.value }
    if (action.type === SET_PASSWORD)
        return { ...state, password: action.value }
    return state
}
