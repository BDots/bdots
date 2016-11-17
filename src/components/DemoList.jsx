"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var DemoList = (function (_super) {
    __extends(DemoList, _super);
    function DemoList() {
        _super.apply(this, arguments);
    }
    DemoList.prototype.render = function () {
        return (<div className="demo-item">
                <a href={this.props.demolist.link}>
                    <img src={this.props.demolist.imgUrl}/>
                    <div className="demo-popup">
                        <span className="demo-popup-title">{this.props.demolist.title}</span>
                        <span className="demo-popup-body">{this.props.demolist.body}</span>
                    </div>
                </a>
            </div>);
    };
    return DemoList;
}(React.Component));
exports.DemoList = DemoList;
