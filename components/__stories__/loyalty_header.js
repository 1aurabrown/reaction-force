"use strict";
var React = require("react");
var storybook_1 = require("@kadira/storybook");
var loyalty_header_1 = require("../loyalty_header");
function LoyaltyHeaderExample() {
    return <loyalty_header_1["default"] />;
}
storybook_1.storiesOf("LoyaltyHeader", loyalty_header_1["default"])
    .add("A header", function () { return (<LoyaltyHeaderExample />); });
