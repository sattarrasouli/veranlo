import { CallEffect, ForkEffect, PutEffect, call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../store/types";
import { RemoveTaskFailed, RemoveTaskSuccess, TaskListFailed, TaskListSuccess, TaskStatusFailed, TaskStatusSuccess } from "../../store/action";
import { IAction, IResponse } from "@/utils/Interfaces";
import { API } from "@/services/API";
import { ENDPOINTS } from "@/services/EndPoints";

import { toast } from "react-toastify";

/**
 * saga file consist of worker and watcher 
 * watcher: watch out for actions user triger and catch them with takelatest(which means the latest one no queue for actions) and then call worker which has been assigned to it.
 * worker: call the api with a query to get result and then send it to redux store error handling using try/catch
 * @param action action to triger api
 */

// Get all task
function* TaskListWorker(action: IAction): Generator<CallEffect<unknown> | PutEffect<{
    type: string;
    payload: string[];
}>, void, any> {

    try {
        const Response: IResponse = yield call(API.get, ENDPOINTS.task)
        yield put(TaskListSuccess(Response.data))
    }
    catch (error: any | { message: string }) {
        console.error('error', error)
        toast.error(error.message)
        TaskListFailed(error)
    }
}

export function* TaskListWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(types.TASK_LIST_REQUEST, TaskListWorker)
}


// change the status of tasks
function* TaskStatusWorker(action: IAction): Generator<CallEffect<unknown> | PutEffect<{
    type: string;
    payload: string[];
}>, void, any> {
    try {
        const Response: IResponse = yield call(API.put, ENDPOINTS.task + "/" + action.payload.id, action.payload)
        yield put(TaskStatusSuccess(Response.data))
    }
    catch (error: any | { message: string }) {
        console.error('error', error)
        toast.error(error.message)
        TaskStatusFailed(error)
    }
}

export function* TaskStatusWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(types.TASK_STATUS_REQUEST, TaskStatusWorker)
}


//Remove a task
function* RemoveTaskWorker(action: IAction): Generator<CallEffect<unknown> | PutEffect<{
    type: string;
    payload: string[];
}>, void, any> {
    try {
        const Response: IResponse = yield call(API.delete, ENDPOINTS.task + "/" + action.payload.id)
        yield put(RemoveTaskSuccess(Response.data))
    }
    catch (error: any | { message: string }) {
        console.error('error', error)
        toast.error(error.message)
        RemoveTaskFailed(error)
    }
}

export function* RemoveTaskWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(types.REMOVE_TASK_REQUEST, RemoveTaskWorker)
}