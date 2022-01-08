import { Action } from "redux";
import { Tweet } from "../../tweets/contracts/state";
import { LoadingState } from "./state";

export enum TweetActionsType{
    SET_TWEET_DATA = 'tags/SET_DATA',
    FETCH_TWEET_DATA = 'tags/FETCH_DATA',
    SET_LOADING_STATE = 'tags/SET_LOADING_STATE',
}

export interface SetTweetDataActionInterface extends Action<TweetActionsType>{
    type: TweetActionsType.SET_TWEET_DATA;
    payload: Tweet;
}
export interface FetchTweetDataActionInterface extends Action<TweetActionsType>{
    type: TweetActionsType.FETCH_TWEET_DATA;
    payload: string;
}

export interface SetTweetLoadingStateActionInterface extends Action<TweetActionsType>{
    type: TweetActionsType.SET_LOADING_STATE;
    payload: LoadingState,
}