import { all } from "redux-saga/effects";
import userSaga from "./sagaAction";


export default function* rootSaga(){
    yield all([
        userSaga()
    ])
}