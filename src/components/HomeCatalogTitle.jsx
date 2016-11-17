"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var HomeCatalogTitle = (function (_super) {
    __extends(HomeCatalogTitle, _super);
    function HomeCatalogTitle() {
        _super.apply(this, arguments);
    }
    HomeCatalogTitle.prototype.render = function () {
        return (<div className="home-catalog-title">
               <h1>{this.props.titletext}</h1>
               <p>{this.props.titlebody}</p>
           </div>);
    };
    return HomeCatalogTitle;
}(React.Component));
exports.HomeCatalogTitle = HomeCatalogTitle;
