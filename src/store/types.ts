/**
 * redux action types (redux best practices) using in actions and reducers to trigger a action when user dispatch one of it
 */

export const TASK_LIST_REQUEST: string = "TASK_LIST_REQUEST"
export const TASK_LIST_FAILED: string = "TASK_LIST_FAILED"
export const TASK_LIST_SUCCESS: string = "TASK_LIST_SUCCESS"

export const TASK_STATUS_REQUEST: string = "TASK_STATUS_REQUEST"
export const TASK_STATUS_SUCCESS: string = "TASK_STATUS_SUCCESS"
export const TASK_STATUS_FAILED: string = "TASK_STATUS_FAILED"

export const REMOVE_TASK_REQUEST: string = "REMOVE_TASK_REQUEST"
export const REMOVE_TASK_SUCCESS: string = "REMOVE_TASK_SUCCESS"
export const REMOVE_TASK_FAILED: string = "REMOVE_TASK_FAILED"

export const ADDING_TASK_REQUEST: string = "ADDING_TASK_REQUEST"
export const ADDING_TASK_SUCCESS: string = "ADDING_TASK_SUCCESS"
export const ADDING_TASK_FAILED: string = "ADDING_TASK_FAILED"

export const EDITING_TASK_DATA_LOCALLY: string = "EDITING_TASK_DATA_LOCALLY"


export const EDITING_TASK_REQUEST: string = "EDITING_TASK_REQUEST"
export const EDITING_TASK_SUCCESS: string = "EDITING_TASK_SUCCESS"
export const EDITING_TASK_FAILED: string = "EDITING_TASK_FAILED"