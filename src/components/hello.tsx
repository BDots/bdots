import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "react-bootstrap";

export class HelloComponent extends React.Component<any, any> {
    render() {
        var helloword = new HelloWord(this.props.framework);
        //return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
        return <Button bsStyle="primary" bsSize="large" block>{helloword.helloword()}</Button>;
    }
}


class HelloWord{
  Message : string;

  constructor (message : string){
    this.Message = message;
  }

  helloword(){
      return "Hello Word " + this.Message;
  }
}
