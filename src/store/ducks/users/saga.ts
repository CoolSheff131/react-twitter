
import { call,put, takeEvery } from "redux-saga/effects";
import { TagsApi } from "../../../services/api/tagsApi";


export function* fetchUsersRequest(){
    // try{
    //     const items = yield call(TagsApi.fetchTags)
    //     yield put(setTags(items))
    // }catch(error){
    //     yield put(setTagsLoadingState(LoadingState.ERROR))
    // }
    
    
}

export function* usersSaga(){
    // yield takeEvery(UsersActionsType.FETCH_TAGS, fetchTagsRequest)
}