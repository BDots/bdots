import * as React from "react";

export class QuickLinks extends React.Component<any, any>{

    render(){
        return (
           <a href={this.props.linkslist.url} className="icon-item ">
               <i className={'fa '+ this.props.linkslist.icon} />
           </a>
        );
    }
}

