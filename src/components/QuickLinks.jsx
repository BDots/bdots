"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var QuickLinks = (function (_super) {
    __extends(QuickLinks, _super);
    function QuickLinks() {
        _super.apply(this, arguments);
    }
    QuickLinks.prototype.render = function () {
        return (<a href={this.props.linkslist.url} className="icon-item ">
               <i className={'fa ' + this.props.linkslist.icon}/>
           </a>);
    };
    return QuickLinks;
}(React.Component));
exports.QuickLinks = QuickLinks;
