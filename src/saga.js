import { call, put } from 'redux-saga/effects';
import { errorAction, listAllPeople } from './actions';

function fetchPeopleFromApi() {
    return fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json());
}
export function* fetchPeople() {
    try {
        const people = yield call(fetchPeopleFromApi);
        yield put(listAllPeople(people))
    } catch (e) {
        yield put(errorAction());
    }
}
export default fetchPeople;