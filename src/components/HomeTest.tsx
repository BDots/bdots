import * as React from "react";
import { Utils } from '../utils/Utils';
import { HomeActions } from "../actions/home.action";

@Utils.subscribeToStore()
export class HomeTest extends React.Component<any, any>{

    onLockInput = () =>{
        this.props.store.dispatch({ type: 'LOCK', });
    }

    onChangeInput = () =>{
        this.props.store.dispatch({ type: 'CHANGE'});
    }

    render(){
        return (
            <div className="content">
                <h1>Home Page</h1>
                <input type="checkbox" onChange={e => this.onLockInput(e)} />
                <input type="text" onChange={e => this.onChangeInput(e)} disabled={this.props.store.getState().isLock ? "disabled" : ""} />
                <span>{this.props.store.getState().inputText}</span>
            </div>
        );
    }
}
