import {applyMiddleware, combineReducers, createStore} from "redux";
import { counterReducer } from "./counterReducer";
import thunk from "redux-thunk";
import {preloadedState} from "../CountSet";

//export let preloadedState: AppStateType;
/*const persistedValueString = localStorage.getItem("startValue");
if(persistedValueString){
    preloadedState = JSON.parse(persistedValueString)
}*/


export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk))

/*store.subscribe(()=>{
    localStorage.setItem('startValue', JSON.stringify(store.getState()))
})*/

export type AppStoreType = typeof store;