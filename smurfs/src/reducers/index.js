import { combineReducers } from 'redux'
import { 
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAIL,
    POST_SMURFS_START,
    POST_SMURFS_SUCCESS,
    POST_SMURFS_FAIL
} from '../actions/index'

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ""
}

export const smurfListReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_SMURFS_START:
            return{
                ...state,
                isFetching: true
            }
        case FETCH_SMURFS_SUCCESS:  
            return{
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ""
            }
        case FETCH_SMURFS_FAIL:
            return{
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state
    }
}

export const smurfFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_SMURFS_START:
            return {
                ...state,
                isPosting: true
            }

        case POST_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isPosting: false,
                error: ""
            }

        case POST_SMURFS_FAIL:
            return{
                ...state,
                error: action.payload,
                isPosting: false
            }

        default:
            return state;
    }

}

export default combineReducers({ smurfListReducer, smurfFormReducer}) 