import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOG_OUT_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from "../actions/actionTypes";
import { IUser } from "../store/types";

const initialState:IUser = {
    id:0,
    username:"",
    password:"",
    email:"",
    score:0,
    gamesPlayed:0
}

type Action = {type:string, payload:any};

export const UserReducer = (state:IUser = initialState, action: Action) => {

    switch(action.type) {

        case LOGIN_USER_SUCCESS:
            return action.payload;
        case LOGIN_USER_FAILURE:
            return action.payload.message
        case LOG_OUT_USER:
            return initialState;
        case REGISTER_USER_SUCCESS:
            return action.payload;
        case REGISTER_USER_FAILURE:
            return action.payload.message;
        default:
            return state
    }
}