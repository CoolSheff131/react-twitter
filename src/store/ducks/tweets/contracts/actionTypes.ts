import { Action } from "redux";
import { Tweet, TweetsState, AddFormState, LoadingState } from "./state";

export enum TweetsActionsType{
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    ADD_TWEET = 'tweets/ADD_TWEET',
    SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE',
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.FETCH_ADD_TWEET;
    payload: {text: string, images: string[]},
}
export interface AddTweetActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.ADD_TWEET;
    payload: Tweet,
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items'];
}
export interface FetchTweetsActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.FETCH_TWEETS;
}
export interface SetAddFormStateActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_ADD_FORM_STATE;
    payload: AddFormState;
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_LOADING_STATE;
    payload: LoadingState,
}