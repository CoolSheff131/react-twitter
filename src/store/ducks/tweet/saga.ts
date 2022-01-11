//@ts-nocheck

import { METHODS } from "http";
import { call,put, takeEvery } from "redux-saga/effects";

import { setTweetLoadingState } from "./contracts/actionCreator";
import { TweetActionsType } from "./contracts/actionTypes";
import { FetchTweetDataActionInterface } from "./contracts/actionTypes";
import { LoadingState } from "./contracts/state";

export function* fetchTweetDataRequest({payload: tweetId}: FetchTweetDataActionInterface){
    try{
        const data: Tweet[] = yield call(TweetsApi.fetchTweetData,tweetId)
        yield put(setTweetData(data))
    }catch(error){
        yield put(setTweetLoadingState(LoadingState.ERROR))
    }
}



export function* tweetSaga(){
    yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
    
}