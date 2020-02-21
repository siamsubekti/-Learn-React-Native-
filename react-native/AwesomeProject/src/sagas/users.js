import { put, takeLatest } from "redux-saga/effects";
import { FIND_ALL_USERS, FIND_ALL_USERS_SUCCESS, FIND_ALL_USERS_ERROR } from "../actions/user.js";

function* findAllUsers() {
    console.log('sagas user');
    
    try {
        const data = yield fetch(
            'https://reqres.in/api/users'
        ).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText || "Unknown error");
            }
            return response.json();
        }).then(json => {
            console.log('json', json.data);
            
            return json.data;
        });

        yield put({
            type: FIND_ALL_USERS_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_ALL_USERS_ERROR,
            error: error
        });
    }
}

export function* watchFindAllUsers() {
    yield takeLatest(FIND_ALL_USERS, findAllUsers);
}