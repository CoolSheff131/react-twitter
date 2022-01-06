import { takeEvery } from "@redux-saga/core/effects";
import { TweetsActionsType } from "./contracts/actionCreator";

export function* fetchTweetsRequest(){
    console.log("test");
}

export function* tweetsSaga(){
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}