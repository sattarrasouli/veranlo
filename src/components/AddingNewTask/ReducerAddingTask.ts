import { IAction, IInitialStateAddingEditing } from "@/utils/Interfaces"
import * as types from "../../store/types"
/**
 * Adding and editing reducer to handle data base on action.
 * declare initial state and its type
 * for three type action adding, editing, and transfer data locally via EditTaskDataLocally
 */

const initialState: IInitialStateAddingEditing = {
    data: [],
    Error: false,
    isLoading: false,

    EditTaskDataLocally: [],

    EditingTaskData: [],
    EditingTaskLoading: false,
    EditingTaskError: false
}

export default function AddingTaskReducer(state = initialState, action: IAction) {
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
        case types.EDITING_TASK_DATA_LOCALLY:
            return {
                ...state,
                EditTaskDataLocally: action,
            }
        case types.EDITING_TASK_REQUEST:
            return {
                ...state,
                EditingTaskData: action.payload,
                EditingTaskLoading: true,
                EditingTaskError: false
            }
        case types.EDITING_TASK_SUCCESS:
            return {
                ...state,
                EditingTaskData: action.payload,
                EditingTaskLoading: false,
                EditingTaskError: false
            }
        case types.EDITING_TASK_FAILED:
            return {
                ...state,
                EditingTaskData: action.payload,
                EditingTaskLoading: false,
                EditingTaskError: true
            }
        default:
            return state
    }
}