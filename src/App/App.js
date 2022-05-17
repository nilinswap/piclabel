"use strict";
exports.__esModule = true;
var React = require("react");
var Root_1 = require("../components/Root");
var Header_1 = require("../components/Header");
var Footer_1 = require("../components/Footer");
var react_1 = require("react");
var App_styles_1 = require("./App.styles");
var App = function () {
    var artifacts = react_1.useState([])[0];
    return (React.createElement("div", { className: "App" },
        React.createElement(App_styles_1.ScFlexColumn, null,
            React.createElement(App_styles_1.ScSideHolder, null,
                React.createElement(Header_1["default"], null)),
            React.createElement(App_styles_1.ScMainHolder, null,
                React.createElement(Root_1["default"], { artifacts: artifacts })),
            React.createElement(App_styles_1.ScSideHolder, null,
                React.createElement(Footer_1["default"], null)))));
};
exports["default"] = App;
