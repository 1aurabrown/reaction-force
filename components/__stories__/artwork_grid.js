"use strict";
var React = require("react");
var Relay = require("react-relay");
var storybook_1 = require("@kadira/storybook");
var artwork_grid_1 = require("../artwork_grid");
var config_1 = require("../../relay/config");
var root_queries_1 = require("../../relay/root_queries");
function GridExample(props) {
    Relay.injectNetworkLayer(config_1.artsyNetworkLayer());
    return <Relay.RootContainer Component={artwork_grid_1["default"]} route={new root_queries_1.ArtistQueryConfig({ artistID: props.artistID })}/>;
}
storybook_1.storiesOf("ArtworkGrid", artwork_grid_1["default"])
    .add("A typical grid", function () { return (<GridExample artistID="banksy"/>); });
