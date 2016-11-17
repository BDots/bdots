"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var HomeBanner = (function (_super) {
    __extends(HomeBanner, _super);
    function HomeBanner() {
        _super.apply(this, arguments);
    }
    HomeBanner.prototype.render = function () {
        return (<div className="home-banner">
               <h1>BDots</h1>
               <p>为您记录生活中的点点滴滴，留下的足迹是成长的见证.</p>
           </div>);
    };
    return HomeBanner;
}(React.Component));
exports.HomeBanner = HomeBanner;
