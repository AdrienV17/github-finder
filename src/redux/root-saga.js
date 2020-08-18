import {all,call} from 'redux-saga/effects';
import { fetchProfileStart } from './profile/profile.saga';


export default function* rootSaga(){
    yield all([
        call(fetchProfileStart)
    ])
}