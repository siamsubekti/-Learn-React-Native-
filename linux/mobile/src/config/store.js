<<<<<<< HEAD
import {applyMiddleware, createStore} from 'redux';
=======
import { applyMiddleware, createStore } from 'redux';
>>>>>>> 2847803e70afcd8f4a9f99500af49eec2b82b0ed
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducer';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
<<<<<<< HEAD
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);
export {store};
=======
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(sagas);

export { store };
>>>>>>> 2847803e70afcd8f4a9f99500af49eec2b82b0ed
