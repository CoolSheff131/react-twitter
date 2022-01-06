import { Draft, produce } from "immer";
import { TweetsActions, TweetsActionsType } from "./contracts/actionCreator";
import { LoadingState, TweetsState } from "./contracts/state";

 const initialTweetsState: TweetsState = {
    items:[],
    loadingState: LoadingState.NEVER
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions)=>{
    const {type, payload} = action;
    if(type === TweetsActionsType.SET_TWEETS){
        draft.items = payload
    }
}, initialTweetsState);