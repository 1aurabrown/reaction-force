"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var styled_components_1 = require("styled-components");
var Header = (_a = ["\n  width: 100%;\n  background-color: #F8F8F8;\n  margin: 40px auto;\n"], _a.raw = ["\n  width: 100%;\n  background-color: #F8F8F8;\n  margin: 40px auto;\n"], styled_components_1["default"].header(_a));
var Logo = (_b = ["\n  content: \"e611\";\n"], _b.raw = ["\n  content: \"\\e611\";\n"], styled_components_1["default"].div(_b));
var LoyaltyHeader = (function (_super) {
    __extends(LoyaltyHeader, _super);
    function LoyaltyHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoyaltyHeader.prototype.render = function () {
        return (<Header>
        <Logo></Logo>
        <p>Early Access</p>
        <p>Collector Loyalty Program</p>
      </Header>);
    };
    return LoyaltyHeader;
}(React.Component));
exports.__esModule = true;
exports["default"] = LoyaltyHeader;
var _a, _b;
