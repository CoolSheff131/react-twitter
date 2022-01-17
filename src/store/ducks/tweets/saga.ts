//@ts-nocheck
import { call,put, takeEvery } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { setTweetLoadingState } from "../tweet/contracts/actionCreator";
import { addTweet, removeTweet, setAddFormState, setTweets, setTweetsLoadingState} from "./contracts/actionCreator";
import { FetchAddTweetActionInterface, RemoveTweetActionInterface, TweetsActionsType } from "./contracts/actionTypes";
import { AddFormState, LoadingState } from "./contracts/state";

export function* fetchTweetsRequest(){
    try{
        const items = yield call(TweetsApi.fetchTweets)
        yield put(setTweets(items))
    }catch(error){
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAddTweetRequest({payload}: FetchAddTweetActionInterface){
    try{
        
        const item = yield call(TweetsApi.addTweet,payload)
        yield put(addTweet(item))
    }catch(error){
        yield put(setAddFormState(AddFormState.ERROR))
    }
}
export function* fetchRemoveTweetRequest({payload}: RemoveTweetActionInterface){
    try{
        
        yield call(TweetsApi.removeTweet,payload)
        
    }catch(error){
        
    }
}

export function* tweetsSaga(){
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
    yield takeEvery(TweetsActionsType.REMOVE_TWEET, fetchRemoveTweetRequest)
}