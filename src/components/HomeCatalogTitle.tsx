import * as React from "react";

export class HomeCatalogTitle extends React.Component<any, any>{

    render(){
        return (
           <div className="home-catalog-title">
               <h1>{this.props.titletext}</h1>
               <p>{this.props.titlebody}</p>
           </div>
        );
    }
}

