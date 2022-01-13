//@ts-nocheck
import { call,put, takeEvery } from "redux-saga/effects";
import { AuthApi } from "../../../services/api/authApi";
import { LoadingState } from "../../types";
import { setUserLoadingStatus, setUserData } from "./contracts/actionCreator";
import { FetchSignInActionInterface, UserActionsType } from "./contracts/actionTypes";


export function* fetchSignInRequest({payload}: FetchSignInActionInterface){
    try{
        
        const {data} = yield call(AuthApi.signIn,payload)
        window.localStorage.setItem('token', data.token)
        yield put(setUserData(data))
    }catch(error){
        yield put(setUserLoadingStatus(LoadingState.ERROR))
    }
}

export function* fetchSignUpRequest({payload}: FetchSignUpActionInterface){
    try{
        yield put(setUserLoadingStatus(LoadingState.LOADING))
        const {data} = yield call(AuthApi.signUp,payload)
        
        yield put(setUserLoadingStatus(LoadingState.SUCCESS))
    }catch(error){
        yield put(setUserLoadingStatus(LoadingState.ERROR))
    }
}

export function* userSaga(){
    yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
    yield takeEvery(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest)
 
}