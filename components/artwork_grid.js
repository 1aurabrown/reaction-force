"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Relay = require("react-relay");
var artwork_1 = require("./artwork");
var ArtworkGrid = (function (_super) {
    __extends(ArtworkGrid, _super);
    function ArtworkGrid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtworkGrid.prototype.render = function () {
        var column1Artworks = this.props.artist.artworks.filter(function (_, index) { return (index % 2) === 0; });
        var column2Artworks = this.props.artist.artworks.filter(function (_, index) { return (index % 2) === 1; });
        return (<div>
        <div style={{ width: 200, float: "left" }}>
          {column1Artworks.map(function (artwork) { return <artwork_1["default"] artwork={artwork} key={artwork.__id}/>; })}
        </div>
        <div style={{ width: 200, float: "left" }}>
          {column2Artworks.map(function (artwork) { return <artwork_1["default"] artwork={artwork} key={artwork.__id}/>; })}
        </div>
      </div>);
    };
    return ArtworkGrid;
}(React.Component));
exports.ArtworkGrid = ArtworkGrid;
exports.__esModule = true;
exports["default"] = Relay.createContainer(ArtworkGrid, {
    fragments: {
        artist: function () {
            return (_a = ["\n      fragment on Artist {\n        artworks {\n          __id\n          ", "\n        }\n      }\n    "], _a.raw = ["\n      fragment on Artist {\n        artworks {\n          __id\n          ", "\n        }\n      }\n    "], Relay.QL(_a, artwork_1["default"].getFragment("artwork")));
            var _a;
        }
    }
});
