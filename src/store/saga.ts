import { AllEffect, ForkEffect, all } from 'redux-saga/effects'
/**
 * rootsaga handle all saga watcher and send it to store via rootsaga function,
 */
export default function* rootSaga(): Generator<AllEffect<Generator<ForkEffect<never>, void, unknown>>, void, unknown> {
    yield all([
    ])
}