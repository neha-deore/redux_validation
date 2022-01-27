import { put, takeLatest, delay, all, takeEvery, take } from 'redux-saga/effects';

function* incCounter() {
  yield delay(2000);
  yield put({ type: "INC" });
}
function* decCounter() {
  yield put({ type: "DEC" });
}
export default function* sagaFunction() {

  yield takeEvery('INCRE', incCounter);
  yield takeEvery('DECRE', decCounter);
}
