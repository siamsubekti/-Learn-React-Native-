<<<<<<< HEAD
import { all, fork } from "redux-saga/effects";
import { watchFindAllUsers } from "./users";

export default function* sagas() {
    console.log('sagas index');

    yield all([
        fork(watchFindAllUsers),
    ]);
};
=======
import { all, fork } from 'redux-saga/effects';
import { watchFindAllFile } from './data';


export default function* sagas() {
    yield all([
        fork(watchFindAllFile),
    ]);
};
>>>>>>> 2847803e70afcd8f4a9f99500af49eec2b82b0ed
