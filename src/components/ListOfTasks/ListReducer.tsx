import * as types from "../../store/types"
/**
 * search reducer to handle data base on action.
 * declare initial state and its type
 */
const initialState: any = {
    data: [],
    Error: false,
    isLoading: false,
    TaskStatusData: [],
    TaskStatusError: false,
    TaskStatusLoading: false
}

export default function SearchReducer(state = initialState, action: any) {
    switch (action.type) {
        case types.TASK_LIST_REQUEST:
            return {
                ...state,
                data: action.payload,
                isLoading: true,
                Error: false
            }
        case types.TASK_LIST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                Error: false
            }
        case types.TASK_LIST_FAILED:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                Error: true
            }
        case types.TASK_STATUS_REQUEST:
            return {
                ...state,
                TaskStatusData: action.payload,
                TaskStatusLoading: true,
                TaskStatusError: false
            }
        case types.TASK_LIST_SUCCESS:
            return {
                ...state,
                TaskStatusData: action.payload,
                TaskStatusLoading: false,
                TaskStatusError: false
            }
        case types.TASK_STATUS_FAILED:
            return {
                ...state,
                TaskStatusData: action.payload,
                TaskStatusLoading: false,
                TaskStatusError: true
            }
        default:
            return state
    }
}