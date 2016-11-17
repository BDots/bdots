import * as React from "react";

export class DemoList extends React.Component<any, any>{

    render(){
        return (
            <div className="demo-item">
                <a href={this.props.demolist.link}>
                    <img src={this.props.demolist.imgUrl} />
                    <div className="demo-popup">
                        <span className="demo-popup-title">{this.props.demolist.title}</span>
                        <span className="demo-popup-body">{this.props.demolist.body}</span>
                    </div>
                </a>
            </div>
        );
    }
}

