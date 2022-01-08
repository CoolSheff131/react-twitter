//@ts-nocheck

import { call,put, takeEvery } from "redux-saga/effects";
import { TagsApi } from "../../../services/api/tagsApi";
import { setTags, setTagsLoadingState, TagsActionsType } from "./contracts/actionCreator";
import { LoadingState } from "./contracts/state";

export function* fetchTagsRequest(){
    try{
        const items = yield call(TagsApi.fetchTags)
        yield put(setTags(items))
    }catch(error){
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }
    
    
}

export function* tagsSaga(){
    yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}