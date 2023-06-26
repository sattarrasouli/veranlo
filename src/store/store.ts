import { compose, configureStore, Store } from '@reduxjs/toolkit';
import { createBrowserHistory, History } from 'history';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import rootSaga from './saga';
/**
 * creating redux store using configure store in reduxjs/toolkit(redux best practice specially in typescript)
 * and history to connect router to react components.
 * saga middleware for handling async action. 
 */
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware()
export const history: History = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store = configureStore({
    middleware: [sagaMiddleware],
    reducer: rootReducer(history),
    enhancers: [composeEnhancers],
});

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch