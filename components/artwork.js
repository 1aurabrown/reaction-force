"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Relay = require("react-relay");
var styled_components_1 = require("styled-components");
var Image = (_a = ["\n  width: 100%;\n"], _a.raw = ["\n  width: 100%;\n"], styled_components_1["default"].img(_a));
var Artwork = (function (_super) {
    __extends(Artwork, _super);
    function Artwork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Artwork.prototype.render = function () {
        return (<div>
        <Image src={this.props.artwork.image.url}/>
        <p>{this.props.artwork.title}</p>
      </div>);
    };
    return Artwork;
}(React.Component));
exports.Artwork = Artwork;
exports.__esModule = true;
exports["default"] = Relay.createContainer(Artwork, {
    fragments: {
        artwork: function () {
            return (_a = ["\n      fragment on Artwork {\n        title\n        date\n        sale_message\n        is_in_auction\n        image {\n          url(version: \"large\")\n          aspect_ratio\n        }\n        artists {\n          name\n        }\n        partner {\n          name\n        }\n        href\n      }\n    "], _a.raw = ["\n      fragment on Artwork {\n        title\n        date\n        sale_message\n        is_in_auction\n        image {\n          url(version: \"large\")\n          aspect_ratio\n        }\n        artists {\n          name\n        }\n        partner {\n          name\n        }\n        href\n      }\n    "], Relay.QL(_a));
            var _a;
        }
    }
});
var _a;
