//@ts-nocheck
import { call,put, takeEvery } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { setTweetLoadingState } from "../tweet/contracts/actionCreator";
import { addTweet, setTweets, setTweetsLoadingState} from "./contracts/actionCreator";
import { FetchAddTweetActionInterface, TweetsActionsType } from "./contracts/actionTypes";
import { LoadingState } from "./contracts/state";

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
        const data={
            _id: Math.random().toString(36).substring(2),
            text: payload,
            user: {
                fullname: "Hebert Morrison",
                username: "kristen",
                avatarUrl: "https://source.unsplash.com/random/100x100?4"
              }
        }
        const item = yield call(TweetsApi.addTweet,data)
        yield put(addTweet(item))
    }catch(error){
        yield put(setTweetLoadingState(LoadingState.ERROR))
    }
}

export function* tweetsSaga(){
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}