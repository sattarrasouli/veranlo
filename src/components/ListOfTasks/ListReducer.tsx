import * as types from "../../store/types"
/**
 * task list reducer to handle data base on action.
 * declare initial state and its type
 * done and remove task and getting list of task
 */
const initialState: any = {
    data: [],
    Error: false,
    isLoading: false,

    TaskStatusData: [],
    TaskStatusError: false,
    TaskStatusLoading: false,

    RemoveTaskData: [],
    RemoveTaskError: false,
    RemoveTaskLoading: false
}

export default function TaskListReducer(state = initialState, action: any) {
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
        case types.REMOVE_TASK_REQUEST:
            return {
                ...state,
                RemoveTaskData: action.payload,
                RemoveTaskLoading: true,
                RemoveTaskError: false
            }
        case types.REMOVE_TASK_SUCCESS:
            return {
                ...state,
                RemoveTaskData: action.payload,
                RemoveTaskLoading: false,
                RemoveTaskError: false
            }
        case types.REMOVE_TASK_FAILED:
            return {
                ...state,
                RemoveTaskData: action.payload,
                RemoveTaskLoading: false,
                RemoveTaskError: true
            }
        default:
            return state
    }
}