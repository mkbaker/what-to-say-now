import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* submitSignUpAnswers(action) {
    try {
        yield axios.post('/api/answer/signup', action.payload);
        console.log('action.payload:', action.payload)
        yield put({ type: 'LOGIN', payload: { username: action.payload.username, password: action.payload.password } });
        // set to 'login' mode so they see the login screen
        // after registration or after they log out
        yield put({ type: 'SET_TO_LOGIN_MODE' });
    } catch (error) {
        console.log('error with submitting answers,', error);
    }
}

function* submitThreeMonthAnswer(action) {
    try {
        yield axios.post('/api/answer/threeMonth', action.payload);
    } catch (error) {
        console.log('error with submitting threeMonth answers,', error);
    }
}
function* submitPostAnswers(action) {
    try {
        yield axios.post("/api/answer/postSurvey", action.payload);
    } catch (error) {
        console.log("error with submitting answers,", error);
    }
}

function* submitAnswerSaga() {
    yield takeLatest(`SUBMIT_SIGNUP_ANSWERS`, submitSignUpAnswers);
    yield takeLatest(`SUBMIT_THREE_MONTH_ANSWERS`, submitThreeMonthAnswer)
    yield takeLatest(`SUBMIT_POST_ANSWERS`, submitPostAnswers)
}

export default submitAnswerSaga;