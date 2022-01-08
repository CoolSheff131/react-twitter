import { Draft, produce } from "immer";
import { TweetsActions } from "./contracts/actionCreator";
import { TweetsActionsType } from "./contracts/actionTypes";
import { AddFormState, LoadingState, TweetsState } from "./contracts/state";

 const initialTweetsState: TweetsState = {
    items:[],
    loadingState: LoadingState.NEVER,
    addFormState: AddFormState.NEVER,
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions)=>{
    

    switch(action.type){
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break;
        case TweetsActionsType.FETCH_TWEETS:
            draft.items = [];
            draft.loadingState = LoadingState.LOADING
            break;
        case TweetsActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload
            break;
        case TweetsActionsType.ADD_TWEET:
            draft.items.push(action.payload)
            draft.loadingState = LoadingState.NEVER
            break;
        case TweetsActionsType.FETCH_ADD_TWEET:
            draft.addFormState = AddFormState.LOADING
            break;
        case TweetsActionsType.SET_ADD_FORM_STATE:
            draft.addFormState = action.payload
            break;
        default: break;
    }

    
}, initialTweetsState);