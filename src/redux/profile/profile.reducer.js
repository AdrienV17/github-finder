import { profileActionTypes } from "./profile.types";


const INITIAL_STATE = {
    profile:{},
    isProfile:false,
    notFoundMessage:undefined,
    isFetching:false,
    errorMessage:undefined
}

export const profileReducer = (state = INITIAL_STATE,action)=>{
    switch (action.type) {
        case profileActionTypes.GET_PROFILE_START:
            return {
                ...state,
                isFetching:true,
                isProfile:false
            }
        case profileActionTypes.GET_PROFILE_SUCCESS:
            return{
                ...state,
                isFetching:false,
                isProfile: true,
                profile:action.payload
            }
        case profileActionTypes.GET_PROFILE_FAILURE:
            return {
                ...state,
                errorMessage:action.payload
            }
        case profileActionTypes.USER_NOT_FOUND:
            return{
                ...state,
                notFoundMessage: action.payload
            }
        default:
            return state
    }
}