import { IPayload, ITaskType } from "@/utils/Interfaces"
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

export const TaskStatusRequest = (payload: IPayload) => {
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

export const RemoveTaskRequest = (payload: IPayload) => {
    return {
        type: types.REMOVE_TASK_REQUEST,
        payload
    }
}

export const RemoveTaskSuccess = (payload: string[]) => {
    return {
        type: types.REMOVE_TASK_SUCCESS,
        payload
    }
}

export const RemoveTaskFailed = (payload: string[]) => {
    return {
        type: types.REMOVE_TASK_FAILED,
        payload
    }
}


export const AddingTaskRequest = (payload: IPayload) => {
    return {
        type: types.ADDING_TASK_REQUEST,
        payload
    }
}

export const AddingTaskSuccess = (payload: string[]) => {
    return {
        type: types.ADDING_TASK_SUCCESS,
        payload
    }
}

export const AddingTaskFailed = (payload: string[]) => {
    return {
        type: types.ADDING_TASK_FAILED,
        payload
    }
}


export const EditTaskDataShareLocally = (payload: ITaskType[]) => {
    return {
        type: types.EDITING_TASK_DATA_LOCALLY,
        payload
    }
}


export const EditingTaskRequest = (payload: IPayload) => {
    return {
        type: types.EDITING_TASK_REQUEST,
        payload
    }
}

export const EditingTaskSuccess = (payload: string[]) => {
    return {
        type: types.EDITING_TASK_SUCCESS,
        payload
    }
}


export const EditingTaskFailed = (payload: string[]) => {
    return {
        type: types.EDITING_TASK_FAILED,
        payload
    }
}