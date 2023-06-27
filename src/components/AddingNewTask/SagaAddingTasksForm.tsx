import { API } from "@/services/API";
import { ENDPOINTS } from "@/services/EndPoints";
import * as types from '../../store/types'

import { AddingTaskFailed, AddingTaskSuccess, EditingTaskFailed, EditingTaskSuccess, RemoveTaskFailed, RemoveTaskSuccess, TaskListRequest, TaskStatusFailed } from "@/store/action";
import { toast } from "react-toastify";
import { CallEffect, ForkEffect, PutEffect, call, put, takeLatest } from "redux-saga/effects";
import { IAction, IResponse } from "@/utils/Interfaces";

/**
 * 
 * @param action actions type and data
 * 1st: for adding task AddingTaskWorker and AddingTaskWatcher
 * 2nd: for Editing task EditingTaskWorker and EditingTaskWatcher
 */
function* AddingTaskWorker(action: IAction): Generator<CallEffect<unknown> | PutEffect<{
    type: string;
    payload: string[];
}>, void, any> {

    try {
        const Response: IResponse = yield call(API.post, ENDPOINTS.task, action.payload)
        yield put(AddingTaskSuccess(Response.data))
    }
    catch (error: any | { message: string }) {
        console.error('error', error)
        toast.error(error.message)
        AddingTaskFailed(error)
    }
}

export function* AddingTaskWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(types.ADDING_TASK_REQUEST, AddingTaskWorker)
}



//Editing task worker and wathcer
function* EditingTaskWorker(action: IAction): Generator<CallEffect<unknown> | PutEffect<{
    type: string;
    payload: string[];
}>, void, any> {
    try {
        const Response: IResponse = yield call(API.put, ENDPOINTS.task + "/" + action.payload.id, action.payload)
        yield put(EditingTaskSuccess(Response.data))

    }
    catch (error: any | { message: string }) {
        console.error('error', error)
        toast.error(error.message)
        EditingTaskFailed(error)
    }
}

export function* EditingTaskWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(types.EDITING_TASK_REQUEST, EditingTaskWorker)
}