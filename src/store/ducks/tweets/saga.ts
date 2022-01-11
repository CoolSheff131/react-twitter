//@ts-nocheck
import { call,put, takeEvery } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { setTweetLoadingState } from "../tweet/contracts/actionCreator";
import { addTweet, setAddFormState, setTweets, setTweetsLoadingState} from "./contracts/actionCreator";
import { FetchAddTweetActionInterface, TweetsActionsType } from "./contracts/actionTypes";
import { AddFormState, LoadingState } from "./contracts/state";

export function* fetchTweetsRequest(){
    try{
        const items = yield call(TweetsApi.fetchTweets)
        yield put(setTweets(items))
    }catch(error){
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAddTweetRequest({payload: text}: FetchAddTweetActionInterface){
    try{
        
        const item = yield call(TweetsApi.addTweet,text)
        yield put(addTweet(item))
    }catch(error){
        yield put(setAddFormState(AddFormState.ERROR))
    }
}

export function* tweetsSaga(){
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}