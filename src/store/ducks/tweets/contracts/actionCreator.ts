import { Action } from "redux";
import { SetTweetsActionInterface, SetTweetsLoadingStateActionInterface, FetchTweetsActionInterface, FetchAddTweetActionInterface, AddTweetActionInterface, SetAddFormStateActionInterface, TweetsActionsType, RemoveTweetActionInterface } from "./actionTypes";
import { AddFormState, LoadingState, Tweet, TweetsState } from "./state";

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload,
})

export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS, 
})



export type TweetsActions = SetTweetsActionInterface
| FetchTweetsActionInterface 
| SetTweetsLoadingStateActionInterface
| FetchAddTweetActionInterface
| AddTweetActionInterface
| SetAddFormStateActionInterface
| RemoveTweetActionInterface

export const fetchAddTweet = (payload: {text: string, images: string[]}): FetchAddTweetActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload
})
export const removeTweet = (payload: string): RemoveTweetActionInterface => ({
    type: TweetsActionsType.REMOVE_TWEET,
    payload
})
export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload,
})

export const setAddFormState = (payload: AddFormState):SetAddFormStateActionInterface =>({
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload,
})