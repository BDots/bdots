/**
 * Created by xihong.shi on 10/27/2016.
 */

import { ActionType } from "../constants/actiontype.constant";

export class HomeActions{

    public static LockInputAction (text : string) : any{
        return {
            type : ActionType.LockInput,
            text
        }
    }

    public static InputChangeAction(text : string) : any{
        return {
            type : ActionType.HomeLinkClick,
            text
        }
    }

}