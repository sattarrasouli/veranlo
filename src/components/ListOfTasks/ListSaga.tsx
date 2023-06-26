import { CallEffect, ForkEffect, PutEffect, call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../store/types";

import { API } from "@/services/API";
import { toast } from "react-toastify";
import { TaskListFailed, TaskListRequest, TaskListSuccess, TaskStatusFailed, TaskStatusSuccess } from "../../store/action";
import { ENDPOINTS } from "@/services/EndPoints";

/**
 * saga file consist of worker and watcher 
 * watcher: watch out for actions user triger and catch them with takelatest(which means the latest one no queue for actions) and then call worker which has been assigned to it.
 * worker: call the api with a query to get result and then send it to redux store (action: searchbooksuccess) error handling using try/catch
 * @param action action to triger api
 */

function* TaskListWorker(action: any): Generator<CallEffect<unknown> | PutEffect<{
    type: string;
    payload: string[];
}>, void, any> {

    try {
        const Response: any = yield call(API.get, ENDPOINTS.task)
        console.log('Response', Response)
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


function* TaskStatusWorker(action: any): Generator<CallEffect<unknown> | PutEffect<{
    type: string;
    payload: string[];
}>, void, any> {
    console.log('action--TaskStatusWorker', action)
    try {
        const Response: any = yield call(API.put, ENDPOINTS.task + "/" + action.payload.id, action.payload)
        console.log('Response', Response)
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