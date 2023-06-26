import * as types from "./types"
/**
 * create action for each types in redux, to handle data in reducer properly.
 * @param payload carry data or query we wanna send to backend
 * 
 * @returns data and actions 
 */
export const SearchBookRequest = (payload: string) => {
    return {
        type: types.SEARCH_BOOK_REQUEST,
        payload
    }
}

export const SearchBookFailed = (payload: string[]) => {
    return {
        type: types.SEARCH_BOOK_FAILED,
        payload
    }
}

export const SearchBookSuccess = (payload: string[]) => {
    return {
        type: types.SEARCH_BOOK_SUCCESS,
        payload
    }
}