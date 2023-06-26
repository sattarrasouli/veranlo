import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
/**
 * 
 * @param history rootReducer to handle all reducers and send it to store via rootReducer.
 * history for be able to use history in saga file for example redirect user after successful response.
 */
export const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
});