import { Draft, produce } from "immer";
import { LoadingState } from "../../types";
import { AddFormState } from "../tweets/contracts/state";
import { UserActions } from "./contracts/actionCreator";
import { UserActionsType } from "./contracts/actionTypes";
import { UserState } from "./contracts/state";



 const initialUserState: UserState = {
    data: undefined,
    status: LoadingState.NEVER,
}

export const userReducer = produce((draft: Draft<UserState>, action: UserActions)=>{
    

    switch(action.type){
        case UserActionsType.SET_USER_DATA:
            draft.data = action.payload
            draft.status = LoadingState.SUCCESS
            break;
        case UserActionsType.SET_LOADING_STATE:
            draft.status = action.payload
            break;
        
        default: break;
    }

    
}, initialUserState);