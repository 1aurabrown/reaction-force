"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Relay = require("react-relay");
var ArtworkQueryConfig = (function (_super) {
    __extends(ArtworkQueryConfig, _super);
    function ArtworkQueryConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ArtworkQueryConfig;
}(Relay.Route));
ArtworkQueryConfig.queries = {
    artwork: function (component, params) {
        return (_a = ["\n      query {\n        artwork(id: $artworkID) {\n          ", "\n        }\n      }\n    "], _a.raw = ["\n      query {\n        artwork(id: $artworkID) {\n          ", "\n        }\n      }\n    "], Relay.QL(_a, component.getFragment("artwork", params)));
        var _a;
    }
};
ArtworkQueryConfig.paramDefinitions = {
    artworkID: { required: true }
};
ArtworkQueryConfig.routeName = "ArtworkQueryConfig";
exports.ArtworkQueryConfig = ArtworkQueryConfig;
var ArtistQueryConfig = (function (_super) {
    __extends(ArtistQueryConfig, _super);
    function ArtistQueryConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ArtistQueryConfig;
}(Relay.Route));
ArtistQueryConfig.queries = {
    artist: function (component, params) {
        return (_a = ["\n      query {\n        artist(id: $artistID) {\n          ", "\n        }\n      }\n    "], _a.raw = ["\n      query {\n        artist(id: $artistID) {\n          ", "\n        }\n      }\n    "], Relay.QL(_a, component.getFragment("artist", params)));
        var _a;
    }
};
ArtistQueryConfig.paramDefinitions = {
    artistID: { required: true }
};
ArtistQueryConfig.routeName = "ArtistQueryConfig";
exports.ArtistQueryConfig = ArtistQueryConfig;
var UserQueryConfig = (function (_super) {
    __extends(UserQueryConfig, _super);
    function UserQueryConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserQueryConfig;
}(Relay.Route));
UserQueryConfig.queries = {
    user: function (component, params) {
        return (_a = ["\n      query {\n        user(id: $userID) {\n          ", "\n        }\n      }\n    "], _a.raw = ["\n      query {\n        user(id: $userID) {\n          ", "\n        }\n      }\n    "], Relay.QL(_a, component.getFragment("user", params)));
        var _a;
    }
};
UserQueryConfig.paramDefinitions = {
    userID: { required: true }
};
UserQueryConfig.routeName = "UserQueryConfig";
exports.UserQueryConfig = UserQueryConfig;
