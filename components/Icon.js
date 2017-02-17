"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var react_1 = require("react");
var icons_1 = require("../assets/icons");
var styled_components_1 = require("styled-components");
var colors_1 = require("../assets/colors");
var Icon = (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function () {
        return (<div className={this.props.className}>{icons_1["default"][this.props.name]}</div>);
    };
    return Icon;
}(react_1.Component));
exports.__esModule = true;
exports["default"] = (_a = ["\n  font: ", ";\n  color: ", "\n"], _a.raw = ["\n  font: ", ";\n  color: ", "\n"], styled_components_1["default"](Icon)(_a, function (props) { return props.font || 'artsy-icons'; }, function (props) { return props.color || 'purple'; }));
<Icon name={"close"} color={colors_1["default"].gray}/>;
var _a;
