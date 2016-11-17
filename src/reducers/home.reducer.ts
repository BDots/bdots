
import { ActionType } from "../constants/actiontype.constant";

/// <reference path="../interfaces/home.interface.d.ts"/>

export class HomeReducers{

    public static testReducer (state : HomeState, action : any){
        switch (action.type){
            case ActionType.HomeLinkClick :
                return Object.assign({}, state, {
                    inputText : action.text
                });
            case ActionType.LockInput :
                return Object.assign({}, state, {
                    isLock : true
                });
            default :
                return state;
        }
    }

}