import * as types from "./types"
/**
 * create action for each types in redux, to handle data in reducer properly.
 * @param payload carry data or query we wanna send to backend
 * 
 * @returns data and actions 
 */
export const TaskListRequest = (payload: string) => {
    return {
        type: types.TASK_LIST_REQUEST,
        payload
    }
}

export const TaskListFailed = (payload: string[]) => {
    return {
        type: types.TASK_LIST_FAILED,
        payload
    }
}

export const TaskListSuccess = (payload: string[]) => {
    return {
        type: types.TASK_LIST_SUCCESS,
        payload
    }
}

export const TaskStatusRequest = (payload: any) => {
    return {
        type: types.TASK_STATUS_REQUEST,
        payload
    }
}

export const TaskStatusFailed = (payload: string[]) => {
    return {
        type: types.TASK_STATUS_FAILED,
        payload
    }
}

export const TaskStatusSuccess = (payload: string[]) => {
    return {
        type: types.TASK_STATUS_SUCCESS,
        payload
    }
}