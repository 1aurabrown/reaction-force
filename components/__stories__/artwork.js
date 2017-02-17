"use strict";
var React = require("react");
var Relay = require("react-relay");
var storybook_1 = require("@kadira/storybook");
var artwork_1 = require("../artwork");
var config_1 = require("../../relay/config");
var root_queries_1 = require("../../relay/root_queries");
function ArtworkExample(props) {
    Relay.injectNetworkLayer(config_1.artsyNetworkLayer());
    return <Relay.RootContainer Component={artwork_1["default"]} route={new root_queries_1.ArtworkQueryConfig({ artworkID: props.artworkID })}/>;
}
storybook_1.storiesOf("Artwork", artwork_1["default"])
    .add("A square artwork", function () { return (<ArtworkExample artworkID="christopher-burkett-coastal-storm-oregon"/>); })
    .add("A landscape artwork", function () { return (<ArtworkExample artworkID="takashi-murakami-tan-tan-bo"/>); })
    .add("A landscape artwork (extra wide)", function () { return (<ArtworkExample artworkID="brian-kosoff-bay-of-islands"/>); })
    .add("A portrait artwork", function () { return (<ArtworkExample artworkID="ester-curini-my-eyes-my-soul"/>); })
    .add("A portrait artwork (extra tall)", function () { return (<ArtworkExample artworkID="snik-untitled-vertical"/>); });
