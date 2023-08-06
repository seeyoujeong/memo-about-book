import { combineReducers } from "redux";
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from "./counter";
import sample from "./sample";
import loading from "./loading";

const rootReducer = combineReducers({
    counter,
    sample,
    loading
});

export function* rootSaga() {
    yield all([counterSaga()]);
}

export default rootReducer;