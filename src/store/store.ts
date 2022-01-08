import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { TweetsState } from './ducks/tweets/contracts/state'
import { rootReducer } from './rootReducer'
import rootSaga from './sagas'
import { TagsState } from './ducks/tags/contracts/state'

declare global{
    interface Window{
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware()

export interface RootState{
    tweets: TweetsState;
    tags: TagsState;
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
