import { LoginFormProps } from "../../../../pages/SignIn/components/LoginModal";
import { FetchSignInActionInterface, SetUserDataActionInterface, SetUserLoadingStateActionInterface, UserActionsType } from "./actionTypes";
import { UserState } from "./state";


export const setUserData = (payload:UserState['data']): SetUserDataActionInterface => ({
    type: UserActionsType.SET_USER_DATA,
    payload,
})

export const fetchSignIn = (payload:LoginFormProps): FetchSignInActionInterface => ({
    type: UserActionsType.FETCH_SIGN_IN,
    payload,
})

export const setUserLoadingStatus = (payload:UserState['status']): SetUserLoadingStateActionInterface => ({
    type: UserActionsType.SET_LOADING_STATE,
    payload,
})





export type UserActions = SetUserDataActionInterface | SetUserLoadingStateActionInterface
