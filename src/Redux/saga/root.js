import {takeEvery} from 'redux-saga/effects';
import { loginHandler } from './loginActions';
import { ResourceHandler } from './resourceActions';

export function* rootSaga(){
    yield takeEvery("PERFORM_LOGIN",loginHandler);
    yield takeEvery("RESOURCE_TRIGGER",ResourceHandler);
}